import { clerkClient } from "@clerk/express";

// export const protectAdmin = async (req, res, next) => {
//   try {
//     const { userId } = req.auth();
//     const user = await clerkClient.users.getUser(userId);
//     user.privateMetadata = {
//       role: "admin",
//     };
//     if (user.privateMetadata !== "admin") {
//       return res.json({ success: false, message: "not authorised" });
//     }
//     next();
//   } catch (error) {
//     return res.json({ success: false, message: "not authorised" });
//   }
// };
export const protectAdmin = async (req, res, next) => {
  try {
    const { userId } = req.auth();
    const user = await clerkClient.users.getUser(userId);

    if (user.privateMetadata?.role !== "admin") {
      return res
        .status(403)
        .json({ success: false, message: "not authorised" });
    }

    next();
  } catch (error) {
    console.error("Error in protectAdmin:", error);
    return res.status(403).json({ success: false, message: "not authorised" });
  }
};

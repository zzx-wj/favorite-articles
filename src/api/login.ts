import type { UmiApiRequest, UmiApiResponse } from "umi";

export default async function (req: UmiApiRequest, res: UmiApiResponse) {
  res.status(200).json({ message: "heihei you get what you want." });
}

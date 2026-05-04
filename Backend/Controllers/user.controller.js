import * as userServices from "../Services/user.services.js";

export const verifyUser = async (req, res) => {
  const result = await userServices.verifyUser(req.body);
  res.json(result);
};
export const registerUser = async (req, res) => {
  const result = await userServices.registerUser(req.body);
  res.json(result);
};
export const getUserInfo = async (req,res)=>{
    const result = userServices.getUserInfo(req.body);
    res.json(result);
}
import slotModel from "../../models/slot.js";
const deleteSlot = async (req, res) => {
  try {
 await slotModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Slot Deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export default deleteSlot;

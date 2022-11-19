import Slots from "../../models/slot.js";

const updateSlot = async (req, res) => {
  try {
    const slot = await Slots.findByIdAndUpdate(req.params.id, {
      ...req.body,
    });

    return res.json({ message: "Show updated successfully", data: slot});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export default updateSlot;
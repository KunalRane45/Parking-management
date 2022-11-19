import Slots from "../../models/slot.js";

const getSlots = async (req, res) => {
  try {
    const slots = await Slots.find();
    res.status(200).json({ data: slots });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const getSlot = async (req, res) => {
  try {
    const show = await Slots.findById(req.params.id);
    if (!show) return res.status(404).json({ message: "Show not found" });
    res.status(200).json({ data: show });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export { getSlots, getSlot };

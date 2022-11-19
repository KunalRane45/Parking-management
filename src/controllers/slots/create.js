import slotModel from '../../models/slot.js';
const createSlots = async (req, res) => {
    try {
        const { name, contact, plate } = req.body;
        const slot = await slotModel.create({ 
            name, 
            contact, 
            plate,
         }); 
         res.json({ message: "Slot created successfully", slot });       
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Something went wrong" });
        
    }
}

export default createSlots;
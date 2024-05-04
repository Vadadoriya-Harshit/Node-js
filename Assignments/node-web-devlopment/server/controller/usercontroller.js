const StudentData = require('../model/model');

exports.GETDATA = async (req, res) => {
  try {
    // Fetch users from the database, sorted by _id in descending order
    const users = await StudentData.find().sort({ _id: -1 });
    
    // Return success response with data
    return res.status(200).json({ status: 0, message: 'Users retrieved successfully', data: users }, null, 2);
  
  } catch (error) { 
    console.error('Error:', error);
    // Handle internal server error
    return res.status(500).json({ status: -1, error: 'Internal Server Error' });
  }
};
exports.ADDDATA = async (req, res) => {
  try {
    const newData = req.body;
    const studentDataInstance = new StudentData(newData);
    const result = await studentDataInstance.save(); // Use save() on the instance
    // Assuming StudentData.save() is a method to save data (check your model)
    
    res.status(200).json({ success: true, message: "Data added successfully", data: result });
  } catch (error) {
    console.error('Error adding data:', error);
    res.status(500).json({ success: false, message: "Failed to add data", error: error.message });
  }
};
exports.DELETEDATA= async (req,res)=>{
  try {
    const id = req.body.id; // Assuming the ID is sent in the request body

    // Check if ID is provided
    if (!id) {
      return res.status(400).json({ success: false, message: "ID is required for deletion" });
    }

    // Find and delete the document by ID
    const result = await StudentData.findByIdAndDelete(id);

    // Check if the document was found and deleted
    if (!result) {
      return res.status(404).json({ success: false, message: "Document not found" });
    }

    // Send success response
    res.status(200).json({ success: true, message: "Dat deleted successfully", data: result });
  } catch (error) {
    // Handle errors
    console.error('Error deleting data:', error);
    res.status(500).json({ success: false, message: "Failed to delete data", error: error.message });
  }
};
exports.EMPDTBYID = async (req,res)=>{
  try {
    const id = req.params.id;
    const item = await StudentData.findById(id);

    if (!item) {
        return res.status(404).json({ error: 'Item not found' });
    }

    res.json(item);
} catch (error) {
    next(error);
}
};
exports.EMPDTUPD = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { name, city } = req.body;

    const updatedData = await StudentData.findByIdAndUpdate(id, { name, city }, { new: true });

    if (!updatedData) {
      return res.status(404).json({ error: 'Data not found' });
    }

    res.json({ message: 'Data saved successfully', data: updatedData });
  } catch (error) {
    next(error);
  }
};

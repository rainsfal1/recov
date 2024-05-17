import mongoose from "mongoose";
import item from "./model/lostItem.js"; // Import your Mongoose model

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://samop251:test12345@cluster0.80isong.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Function to create a single lost item
const createLostItem = async (itemData) => {
  try {
    // Create the item in the database
    const newItem = await item.create(itemData);
    console.log("Created item:", newItem);
  } catch (error) {
    console.error("Error creating item:", error);
  }
};

// Function to create multiple lost items
const createMultipleLostItems = async () => {
  // Array of item data
  const itemsData = [];

  // Generate 20 items
  for (let i = 0; i < 40; i++) {
    const item = {
      userName: "User" + (i + 1),
      itemName: "Item " + (i + 1),
      category: "Category " + ((i + 1) % 6),
      description: "Description " + (i + 1),
      image: "image-url-" + (i + 1),
      location: "Location " + (i + 1),
      email: "email" + (i + 1) + "@example.com",
      status: "Pending",
      adminApproval: false,
      itemType: "lost",
    };
    itemsData.push(item);
  }

  // Create each item
  for (const itemData of itemsData) {
    await createLostItem(itemData);
  }
};

// Call the function to create multiple items
createMultipleLostItems();

import Job from "../models/JobSchema.js";



// Function to handle creating a new job post
export const PostJob = async (req, res) => {
    try {
        const { company, title, description, link, salary, location } = req.body;

        // Create a new job post using the Job model
        const newJob = new Job({
            company,
            JobTitle: title,  // Make sure this matches the schema
            description,
            Salary: salary,  // Ensure this matches the schema
            link,
            location
        });

        // Save the new job post to the database
        const savedJob = await newJob.save();

        // Respond with the created job post
        res.status(201).json(savedJob);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while creating the job post.' });
    }
};

// Function to handle retrieving all job posts
export const getJob = async (req, res) => {
  try {
    // Fetch all job posts from the database
    const jobs = await Job.find();

    // Respond with the retrieved job posts
    res.status(200).json(jobs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while retrieving the job posts.' });
  }
};

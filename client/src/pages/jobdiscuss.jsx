import React, { useState, useEffect } from "react";
import axios from "axios";
import { Editor } from "@tinymce/tinymce-react";
import {
  Box,
  Flex,
  Button,
  Input,
  Textarea,
  Text,
  IconButton,
  Avatar,
  Heading,
  Card,
  CardBody,
  CardFooter,
  useToast
} from "@chakra-ui/react";
import { AiOutlineLike, AiOutlineComment } from "react-icons/ai";

// Component for the job posting form
const JobForm = ({ showForm, handleCreate }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("");
  const [location, setLocation] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [link, setLink] = useState("");
  const toast = useToast();

  const handleSubmit = () => {
    if (!title || !description || !salary || !location || !companyName || !link) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all fields.",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    if (isNaN(salary)) {
      toast({
        title: "Invalid Salary",
        description: "Please enter a valid number for the salary.",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    handleCreate({
      company: companyName,
      title,
      description,
      link,
      salary,
      location,
      replies: [],
    });
  };

  return (
    showForm && (
      <Box bg="#ffffff" boxShadow="lg" rounded="lg" p={8} w="full" maxW="600px" mb={6}>
        <Flex align="center" mb={4}>
          <Avatar size="md" name="User Name" src="https://bit.ly/broken-link" />
          <Input
            placeholder="Job Title"
            size="lg"
            ml={4}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            color="#333333"
          />
        </Flex>
        <Textarea
          placeholder="Describe the job role..."
          size="lg"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          mb={4}
          color="#333333"
        />
        <Input
          placeholder="Salary"
          size="lg"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          mb={4}
          color="#333333"
        />
        <Input
          placeholder="Location"
          size="lg"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          mb={4}
          color="#333333"
        />
        <Input
          placeholder="Company Name"
          size="lg"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          mb={4}
          color="#333333"
        />
        <Input
          placeholder="Link to Job Posting"
          size="lg"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          mb={4}
          color="#333333"
        />
        <Button colorScheme="blue" size="lg" w="full" onClick={handleSubmit}>
          Post Job
        </Button>
      </Box>
    )
  );
};

// Main JobPosting component
// Main JobPosting component
const JobPosting = () => {
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [currentReply, setCurrentReply] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);
  const toast = useToast();

  const fetchJobs = () => {
    axios.get("http://localhost:5000/api/jobs")
      .then((response) => setProjects(response.data))
      .catch((error) => console.error("Error fetching jobs:", error));
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleCreate = (newJob) => {
    axios.post("http://localhost:5000/api/jobs", newJob)
      .then((response) => {
        setProjects([...projects, response.data]);
        setShowForm(false);
        toast({
          title: "Job Posted",
          description: "Your job posting has been created successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
       console.log(response.data) 
      })
      .catch((error) => {
        console.error("Error posting job:", error);
        toast({
          title: "Post Failed",
          description: "There was an error posting the job.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  const handleReply = (index) => {
    const newProjects = [...projects];
    if (currentReply[index]) {
      newProjects[index].replies = newProjects[index].replies || []; // Ensure replies is an array
      newProjects[index].replies.push(currentReply[index]);
      setProjects(newProjects);
      setCurrentReply((prev) => ({ ...prev, [index]: "" }));
    }
  };

  const toggleProject = (index) => {
    setSelectedProject(selectedProject === index ? null : index);
  };

  const handleEditorChange = (content, index) => {
    setCurrentReply((prev) => ({ ...prev, [index]: content }));
  };

  return (
    <><br /><br /><br />
    <Box bg="black" py={10} px={4} minH="100vh">
      <Flex direction="column" align="center" justify="center">
        <Button colorScheme="gray" size="lg" mb={6} onClick={() => setShowForm(!showForm)}>
          {showForm ? "Cancel Job Posting" : "Create a Job Posting"}
        </Button>

        <JobForm showForm={showForm} handleCreate={handleCreate} />

        {projects.map((project, index) => (
          <Card
            key={index}
            bg="#ffffff"
            boxShadow="lg"
            rounded="lg"
            p={6}
            w="full"
            maxW="600px"
            mb={6}
            onClick={() => toggleProject(index)}
          >
            <CardBody>
              <Flex align="center" mb={4}>
                <Avatar size="md" name="Job Poster" src="https://bit.ly/broken-link" />
                <Box ml={4}>
                  <Heading fontSize="lg" color="#333333">
                   {project.JobTitle}
                  </Heading>
                  <Text fontSize="sm" color="#666666">
                  <strong>Company</strong>  {project.company} - {Date.now()}
                  </Text>
                </Box>
              </Flex>
              <Text fontSize="md" mb={2} color="#333333">
              <strong>Description:</strong> {project.description}
              </Text>
              <Text fontSize="md" mb={2} color="#333333">
                <strong>Salary:</strong> {project.Salary}
              </Text>
              
              <Text fontSize="md" mb={4} color="#333333">
                <strong>Link:</strong>{" "}
                <a href={project.link} target="_blank" rel=" noreferrer">
                  {project.link}
                </a>
              </Text>
              <Flex justify="space-between" align="center">
                <IconButton
                  aria-label="Like"
                  icon={<AiOutlineLike />}
                  variant="outline"
                  colorScheme="blue"
                />
                <IconButton
                  aria-label="Comment"
                  icon={<AiOutlineComment />}
                  variant="outline"
                  colorScheme="blue"
                />
              </Flex>
            </CardBody>
            {selectedProject === index && (
              <>
                <CardBody>
                  <Editor
                    apiKey="0ywn3u3u1h2iedumcxbafhwmaxyzrml8otqhqflxngltr0g8" 
                    init={{
                      height: 300,
                      menubar: false,
                      plugins: [
                        "advlist autolink lists link image charmap print preview anchor",
                        "searchreplace visualblocks code fullscreen",
                        "insertdatetime media table paste code help wordcount",
                      ],
                      toolbar: "undo redo | formatselect | removeformat | code | help",
                      content_style: `
                        body {
                          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                          font-size: 14px;
                          line-height: 1.6;
                          background-color: #ffffff;
                          padding: 10px;
                        }
                        .mce-content-body {
                          background-color: white;
                          border-radius: 8px;
                          padding: 15px;
                          box-shadow: 0 0 10px rgba(0,0,0,0.1);
                        }
                      `,
                      branding: false,
                    }}
                    value={currentReply[index] || ""}
                    onEditorChange={(content) => handleEditorChange(content, index)}
                  />
                </CardBody>
                <CardFooter flexDirection="column" alignItems="center">
                  <Button colorScheme="green" onClick={() => handleReply(index)}>
                    Reply
                  </Button>
                </CardFooter>
              </>
            )}
          </Card>
        ))}
      </Flex>
    </Box>
    </>
  );
};

export default JobPosting;

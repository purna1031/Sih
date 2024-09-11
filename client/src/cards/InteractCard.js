import React, { useState } from "react";
import { Editor } from '@tinymce/tinymce-react';
import axios from "axios";
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
  CardFooter 
} from "@chakra-ui/react";
import { AiOutlineLike, AiOutlineComment } from "react-icons/ai";

const Interact = () => {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");  // Added link state
  const [showForm, setShowForm] = useState(false);
  const [currentReply, setCurrentReply] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);

  const bgColor = "#ffffff";
  const cardBgColor = "#f7f7f7";
  const textColor = "#333333";
  const secondaryTextColor = "#666666";
  const replyBgColor = "#f0f0f0";

  const handleCreate = async () => {
    if (title && description && link) {  // Ensure link is also filled
      try {
        const response = await axios.post('/api/posts', {
          title,
          description,
          link
        });

        setProjects([...projects, response.data]);
        setTitle("");
        setDescription("");
        setLink("");  // Reset the link field
        setShowForm(false);
      } catch (err) {
        console.error("Error posting data:", err);
      }
    }
  };

  const handleEditorChange = (content, index) => {
    setCurrentReply(prev => ({ ...prev, [index]: content }));
  };

  const handleReply = (index) => {
    const newProjects = [...projects];
    if (currentReply[index]) {
      newProjects[index].replies.push(currentReply[index]);
      setProjects(newProjects);
      setCurrentReply(prev => ({ ...prev, [index]: '' }));
    }
  };

  const toggleProject = (index) => {
    setSelectedProject(selectedProject === index ? null : index);
  };

  return (
    <Box bg={cardBgColor} py={10} px={4} minH="100vh">
      <Flex direction="column" align="center" justify="center">
        <Button 
          colorScheme="blue" 
          size="lg" 
          mb={6} 
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Cancel Post" : "Create a Post"}
        </Button>

        {showForm && (
          <Box
            bg={bgColor}
            boxShadow="lg"
            rounded="lg"
            p={8}
            w="full"
            maxW="600px"
            mb={6}
          >
            <Flex align="center" mb={4}>
              <Avatar size="md" name="User Name" src="https://bit.ly/broken-link" />
              <Input
                placeholder="Title"
                size="lg"
                ml={4}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                color={textColor}
              />
            </Flex>
            <Textarea
              placeholder="What do you want to talk about?"
              size="lg"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              mb={4}
              color={textColor}
            />
            <Input
              placeholder="Link"
              size="lg"
              value={link}
              onChange={(e) => setLink(e.target.value)}  
              mb={4}
              color={textColor}
            />
            <Button colorScheme="blue" size="lg" w="full" onClick={handleCreate}>
              Post
            </Button>
          </Box>
        )}

        {projects.map((project, index) => (
          <Card
            key={index}
            bg={bgColor}
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
                <Avatar size="md" name="User Name" src="https://bit.ly/broken-link" />
                <Box ml={4}>
                  <Heading fontSize="lg" color={textColor}>{project.title}</Heading>
                  <Text fontSize="sm" color={secondaryTextColor}>
                    User Name - 2 months ago
                  </Text>
                </Box>
              </Flex>
              <Text fontSize="md" mb={4} color={textColor}>{project.description}</Text>
              {project.link && (
                <Text fontSize="md" mb={4} color="blue.500">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.link}
                  </a>
                </Text>
              )}
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
                    apiKey='0ywn3u3u1h2iedumcxbafhwmaxyzrml8otqhqflxngltr0g8'
                    init={{
                      height: 150,
                      menubar: false,
                      plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                      ],
                      toolbar: 'undo redo | formatselect | removeformat | code | help',
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
                <CardFooter>
                  <Button colorScheme="green" onClick={() => handleReply(index)} w="full">
                    Post Reply
                  </Button>
                  {project.replies.length > 0 && (
                    <Box mt={4}>
                      <Text fontSize="lg" mb={2} color={textColor}>
                        Replies:
                      </Text>
                      {project.replies.map((reply, replyIndex) => (
                        <Box key={replyIndex} p={4} bg={replyBgColor} rounded="md" mb={2}>
                          <div dangerouslySetInnerHTML={{ __html: reply }} />
                        </Box>
                      ))}
                    </Box>
                  )}
                </CardFooter>
              </>
            )}
          </Card>
        ))}
      </Flex>
    </Box>
  );
};

export default Interact;

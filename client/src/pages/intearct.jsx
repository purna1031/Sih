import React, { useState } from "react";
import { Editor } from '@tinymce/tinymce-react';
import { Card, CardBody, CardFooter, Input, Textarea, Button, Box, Text, Flex } from "@chakra-ui/react";

const Interact = () => {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [currentReply, setCurrentReply] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCreate = () => {
    if (title && description) {
      setProjects([...projects, { title, description, replies: [] }]);
      setTitle("");
      setDescription("");
      setShowForm(false);
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100" style={{ paddingTop: '50px', backgroundColor: "black" }}>
      <Flex direction="column" align="center" justify="center" w="full">
        <Button color="black" backgroundColor="bisque" size="lg" mb={4} onClick={() => setShowForm(!showForm)}>
          {showForm ? "Hide Form" : "Interact"}
        </Button>

        {showForm && (
          <Flex align="center" justify="center" w="full">
            <Card w="full" maxW="600px" boxShadow="lg" borderRadius="lg" p={6} bg="white" mb={4}>
              <CardBody>
                <Input
                  placeholder="Title"
                  size="lg"
                  mb={4}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <Textarea
                  placeholder="Description"
                  size="md"
                  mb={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </CardBody>
              <CardFooter>
                <Button backgroundColor="black" color="bisque" size="lg" w="full" onClick={handleCreate}>
                  Submit
                </Button>
              </CardFooter>
            </Card>
          </Flex>
        )}

        {projects.map((project, index) => (
          <Card
            key={index}
            maxW="600px"
            w="full"
            boxShadow="lg"
            borderRadius="lg"
            p={6}
            bg="white"
            mb={4}
            onClick={() => toggleProject(index)}
            cursor="pointer"
          >
            <CardBody>
              <Text fontWeight="bold" fontSize="xl">
                Title: {project.title}
              </Text>
              <Text mt={2}>
               <strong>Description: </strong> {project.description}
              </Text>
            </CardBody>
            {selectedProject === index && (
              <>
                <CardBody>
                  <Text fontWeight="bold" mb={2}>Reply to this :</Text>
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
                      toolbar: 'undo redo | formatselect | ' +
                        'removeformat | code | help',
                      content_style: `
                        body {
                          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                          font-size: 14px;
                          line-height: 1.6;
                          background-color: #f4f4f4;
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
                  <Flex w="full" justify="space-between" align="center">
                    <Button colorScheme="green" onClick={() => handleReply(index)}>
                      Reply
                    </Button>
                    {project.replies.length > 0 && (
                      <Box w="full" mt={4} textAlign="right">
                        <Text fontSize="lg" mb={2}>
                          Replies:
                        </Text>
                        {project.replies.map((reply, replyIndex) => (
                          <Box key={replyIndex} p={4} bg="gray.100" borderRadius="md" mb={2}>
                            <div dangerouslySetInnerHTML={{ __html: reply }} />
                          </Box>
                        ))}
                      </Box>
                    )}
                  </Flex>
                </CardFooter>
              </>
            )}
          </Card>
        ))}
      </Flex>
    </div>
  );
}

export default Interact;

import React, { useState, useEffect, useContext } from "react";
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
} from "@chakra-ui/react";
import { AiOutlineLike, AiOutlineComment } from "react-icons/ai";
import UserContext from "./UserContext";
import { formatDistanceToNow } from "date-fns";

const Interact = () => {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [currentReply, setCurrentReply] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);
  const { loggedInUser } = useContext(UserContext);

  const bgColor = "#ffffff"; // White background color
  const cardBgColor = "black"; // Card background color
  const textColor = "#333333"; // Dark text color
  const secondaryTextColor = "#666666"; // Secondary text color
  const replyBgColor = "#f0f0f0"; // Light gray background for replies

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/posts");
        const postsWithReplies = response.data.map((post) => ({
          ...post,
          replies: post.replies || [], // Initialize replies array if missing
        }));
        setProjects(postsWithReplies);
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };

    fetchPosts();
  }, []);

  // Function to handle post creation
  const handleCreate = async () => {
    if (title && description) {
      try {
        const response = await axios.post("http://localhost:5000/api/posts", {
          title,
          description,
          replies: [], // Initialize replies array
        });
        setProjects([...projects, response.data]); // Add new post to state
        setTitle("");
        setDescription("");
        setShowForm(false);
      } catch (err) {
        console.error("Error creating post:", err);
      }
    }
  };

  const handleEditorChange = (content, index) => {
    setCurrentReply((prev) => ({ ...prev, [index]: content }));
  };

  // Function to handle replies
  const handleReply = async (index) => {
    const newProjects = [...projects];
    if (currentReply[index]) {
      const updatedPost = {
        ...newProjects[index],
        replies: [...newProjects[index].replies, currentReply[index]],
      };

      try {
        // Update the post on the server
        await axios.put(
          `http://localhost:5000/api/posts/${updatedPost._id}`,
          updatedPost
        );
        newProjects[index] = updatedPost;
        setProjects(newProjects);
        setCurrentReply((prev) => ({ ...prev, [index]: "" }));
      } catch (error) {
        console.error("Error updating post:", error);
      }
    }
  };

  // Toggle selected project visibility
  const toggleProject = (index) => {
    setSelectedProject(selectedProject === index ? null : index);
  };

  return (
    <>
      <br />
      <br />
      <br />
      <Box bg={cardBgColor} py={10} px={4} minH="100vh">
        <Flex direction="column" align="center" justify="center">
          <Button
            colorScheme="gray"
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
                <Avatar
                  size="md"
                  name={loggedInUser?.name || "User Name"}
                  src={loggedInUser?.avatarUrl || "https://bit.ly/broken-link"}
                />
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
              <Button
                colorScheme="blue"
                size="lg"
                w="full"
                onClick={handleCreate}
              >
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
                  <Avatar
                    size="md"
                    name={project.userName || "User Name"}
                    src={project.avatarUrl || "https://bit.ly/broken-link"}
                  />
                  <Box ml={4}>
                    <Heading fontSize="lg" color={textColor}>
                      {project.title}
                    </Heading>
                    <Text fontSize="sm" color={secondaryTextColor}>
  {project.userName || "User Name"} -{" "}
  {project.createdAt
    ? `${formatDistanceToNow(new Date(project.createdAt))} ago`
    : "Unknown time"}
</Text>

                  </Box>
                </Flex>
                <Text fontSize="md" mb={4} color={textColor}>
                  {project.description}
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
                        height: 150,
                        menubar: false,
                        plugins: [
                          "advlist autolink lists link image charmap print preview anchor",
                          "searchreplace visualblocks code fullscreen",
                          "insertdatetime media table paste code help wordcount",
                        ],
                        toolbar:
                          "undo redo | formatselect | removeformat | code | help",
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
                      onEditorChange={(content) =>
                        handleEditorChange(content, index)
                      }
                    />
                  </CardBody>
                  <CardFooter flexDirection="column" alignItems="center">
                    <Button
                      colorScheme="green"
                      onClick={() => handleReply(index)}
                      w="full"
                      mb={4}
                    >
                      Post Reply
                    </Button>
                    {project.replies.length > 0 && (
                      <Box mt={4} w="full" textAlign="center">
                        <Text
                          fontSize="lg"
                          mb={2}
                          fontWeight="bold"
                          color={textColor}
                        >
                          Replies:
                        </Text>
                        {project.replies.map((reply, replyIndex) => (
                          <Box
                            key={replyIndex}
                            p={4}
                            bg={replyBgColor}
                            rounded="md"
                            mb={3}
                            borderLeft="4px solid #3182ce"
                            boxShadow="md"
                            maxW="500px"
                            mx="auto"
                          >
                            <Flex
                              alignItems="center"
                              justifyContent="center"
                              mb={2}
                            >
                              <Avatar
                                size="sm"
                                name="Reply User"
                                src="https://bit.ly/broken-link"
                                mr={2}
                              />
                              <Text fontSize="sm" color={secondaryTextColor}>
                                Reply User - Just now
                              </Text>
                            </Flex>
                            <Text
                              fontSize="sm"
                              color={textColor}
                              dangerouslySetInnerHTML={{ __html: reply }}
                            />
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
    </>
  );
};

export default Interact;

import React from "react";
import { Editor } from '@tinymce/tinymce-react';

const Interact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen mt-[-100px] bg-gray-100">
      <Editor
        apiKey='0ywn3u3u1h2iedumcxbafhwmaxyzrml8otqhqflxngltr0g8'
        init={{
          height: 300, // Decreased height
          width: 600,  // Decreased width
          menubar: false, // Hides the menu bar
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar: 'undo redo | formatselect | ' +
            'bold italic underline strikethrough | forecolor backcolor | ' +
            'alignleft aligncenter alignright alignjustify | ' +
            'bullist numlist outdent indent | link image | ' +
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
          tinycomments_mode: 'embedded',
          tinycomments_author: 'Author name',
          mergetags_list: [
            { value: 'First.Name', title: 'First Name' },
            { value: 'Email', title: 'Email' },
          ],
          ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
        }}
        initialValue="Welcome to TinyMCE!"
      />
    </div>
  );
}

export default Interact;

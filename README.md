# TRAINCROP

This is a simple tool to crop images, i lied, isn't simple, but it's easy to use 👻.

First of all, you need to know the context (if dont care about it, just skip this part)

## Look, it's a very nice website, isn't it?
![image](https://user-images.githubusercontent.com/82967045/222873828-a41bfb8c-b8ef-40b2-9838-279757a38fdc.png)

## Context
When I tried to train an AI with my face, I had to use some images, but for some reasons the AI needs images with only the face and 512x512 images, I had to crop images manually using an image editor, but it's boring, so I created this tool to do it for me (and for you baby 😘).
- Really i just created this tool to participate in a hackathon organized by the great [Midudev](https://www.midu.dev/), (a compliment to earn points does not come amiss😅)

## How to use it
- It's very simple, just go to the [website](https://train-crop.vercel.app) and upload your images, then you can crop them and download them.

## If it is not clear to you, here are a few instructions and functionalities of the tool
- You can upload multiple images at the same time [UPLOAD IMAGES](https://user-images.githubusercontent.com/82967045/222875506-18e1f010-2f63-458a-b405-ded79c206d94.mp4)
- You can select the size of the image [IMAGE SIZE](https://user-images.githubusercontent.com/82967045/222875561-1efeb968-ed52-4573-be9f-182387a4f134.mp4)
- You can select the format of the image!!! Nah, just kidding, it's always a jpeg 😋, you can download [DOWNLOAD IMAGES](https://user-images.githubusercontent.com/82967045/222875714-2cd0ee14-832a-4798-b2ed-5b3afce95415.mp4)
- The images are persisted in the browser, so you can close the tab and open it again and the images will still be there, but if you clear the browser data, the images will be lost 😢, so, Don't touch the local storage, please 🙏 or you will lose your images 😭 [PERSISTENCE](https://user-images.githubusercontent.com/82967045/222875643-26cefb8c-ea08-4229-8851-b28711c91b87.mp4)
- You can delete the images, one by one or all at once [DELETE IMAGES](https://user-images.githubusercontent.com/82967045/222875675-f6a949de-cbe1-4ca5-bfc6-fc14ef4a1332.mp4)

## If you come here, you are a real fan, so I will tell you a secret
- Here's how to configure the project locally, so you can contribute to the project, or just to see how it works, or just to see how bad the code is 😅 (Naah, it's not that bad 😎)
- you can download the code and run it locally, but you need to have node installed, then you can run the following commands
```bash
git clone https://github.com/Luisparr14/TrainCrop
cd TrainCrop
yar install -- or npm install
```

- You need a .env file with the following variables
```
VITE_CLOUDINARY_CLOUD_NAME=put-your-cloud-name-here
VITE_CLOUDINARY_API_KEY=put-your-api-key-here
VITE_CLOUDINARY_API_SECRET=put-your-api-secret-here (This is very very secret, don't share it with anyone)
VITE_CLOUDINARY_UPLOAD_PRESET=put-your-upload-preset-here
```

- Then you can run the following command
```bash
yarn dev -- or npm run dev
```

## If you want to contribute
- You can contribute to the project, just fork it and make a pull request, I will review it and if it's good, I will merge it, if it's bad, I will tell you why it's bad and you can fix it and make a new pull request, and so on, until it's good 😅

## If you want to contact me for give me a job
- You can contact me in [Linkedin](https://www.linkedin.com/in/luisparr14/) dont be afraid of success 😎

## Acknowledgments

- [Midudev](https://www.midu.dev/) for the hackathon
- [Cloudinary](https://cloudinary.com/) for the image hosting and sponsoring the hackathon
- [React](https://reactjs.org/) for the framework
- [Vite](https://vitejs.dev/) for the build tool
- [Vercel](https://vercel.com/) for the hosting
- [Tailwind](https://tailwindcss.com/) for the css framework
- [Other libraries](package.json) used in the project
- **My Mom** for the support and the love

I hope you like it, and if you want to contribute, you are welcome, I will be happy to receive your pull request 😊

import mongoose from 'mongoose';
import postMessage from '../models/postMessage.js';

export const getposts = async (req, res) => {
   try {
      const postMessages = await postMessage.find();
      res.status(200).json(postMessages);
   }
   catch (error) {
      res.status(404).json({ message: error.message });
   }

}
export const createPost = async (req, res) => {

   const newPost = new postMessage(req.body);
   try {
      await newPost.save();
      res.status(201).json(newPost);
   } catch (error) {
      res.status(409).json({ message: error.message });
   }
}

export const updatePost = async (req, res) => {
   const { id: _id } = req.params;
   const post = req.body;

   if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

   const updatePost = await postMessage.findByIdAndUpdate(_id, { ... post, _id}, { new: true });

   res.json(updatePost);
}
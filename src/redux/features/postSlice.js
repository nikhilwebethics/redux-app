import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

 export const getPosts = createAsyncThunk("posts/getPosts", async ({page},{perPage}) => {
     
    return fetch(`https://renemorozowich.com/wp-json/wp/v2/posts?filter[posts_per_page]=${perPage}&page=${page}&_embed`).then((res) => 
    res.json()
  );
 })

 const postSlice = createSlice(({
    name: "posts",
     initialState: {
         posts: [],
         loading: false,
     },
     extraReducers:{
         [getPosts.pending]: (state, action) => {
             state.loading = true;
             
         },
         [getPosts.fulfilled]: (state, action) => {
            state.loading = false;
            state.posts = action.payload;
         },
         [getPosts.rejected]: (state, action) => {
             state.loading = false;
         },
 
    },
 }));

 export default postSlice.reducer;
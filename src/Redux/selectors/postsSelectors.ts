export default {
  getCardsList: (state: any) => state.postsReducer.cardsList,
  getPostsLoading: (state: any) => state.postsReducer.isPostsLoading,
  getSinglePostLoading: (state: any) => state.postsReducer.isPostLoading,
  getSinglePost: (state: any) => state.postsReducer.singlePost,
  getSingleBlogPost: (state: any) => state.postsReducer.singlePost,
  getCardsCount: (state: any) => state.postsReducer.cardsCount,
  getSearchString: (state: any) => state.postsReducer.searchString,
  getSearchedPostsLoading: (state: any) =>
    state.postsReducer.isSearchPostsLoading,
  getSearchedPosts: (state: any) => state.postsReducer.searchedPosts,
  getSearchedPostsCount: (state: any) => state.postsReducer.searchedPostsCount,
  getActiveTab: (state: any) => state.postsReducer.activeTab,
  getBlogPost: (state: any) => state.postsReducer.cardsList,
  getBlogCardsCount: (state: any) => state.postsReducer.cardsCount,
  getSearchedBlogPosts: (state: any) => state.postsReducer.searchedPosts,
  getActiveBtn: (state: any) => state.postsReducer.activeBtn,
  setUser: (state: any) => state.authReducer.user,
  getIsModalImgVisible: (state: any) => state.postsReducer.postModalImgVisible,
  getSelectedPost: (state: any) => state.postsReducer.selectedPost,
};

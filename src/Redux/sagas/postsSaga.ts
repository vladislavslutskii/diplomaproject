import { all, takeLatest, call, put } from "redux-saga/effects";
import {
  getBlogPosts,
  getBlogPostsCount,
  getPosts,
  getPostsBlogBtn,
  getPostsBtn,
  getPostsCount,
  getSingleBlogPost,
  getSinglePost,
  searchForBlogPosts,
  searchForPosts,
  setCardsCount,
  setCardsList,
  setPostsLoading,
  setSearchedPosts,
  setSearchedPostsCount,
  setSearchPostsLoading,
  setSinglePost,
  setSinglePostLoading,
} from "../reducers/postsreducer";
import Api from "../api";
import { PayloadAction } from "@reduxjs/toolkit";
import { GetPostsPayload, SearchPostsPayload } from "../../Utils";

function* getPostsWorker(action: PayloadAction<GetPostsPayload>) {
  yield put(setPostsLoading(true));
  const { _start, _sort, publishedAt_gt } = action.payload;
  const { data, status, problem } = yield call(
    Api.getPostsList,
    _start,
    _sort,
    publishedAt_gt
  );
  if (status === 200 && data) {
    yield put(setCardsList(data));
  } else {
    console.log("Sorry, but the posts were not received", problem);
  }
  yield getPostsCountWorker();
  yield put(setPostsLoading(false));
}
function* getPostsCountWorker() {
  const { data, status, problem } = yield call(Api.getPostsCount);
  if (status === 200 && data) {
    yield put(setCardsCount(data));
  } else {
    console.log("Sorry, but the list of posts was not received", problem);
  }
}

function* getBlogPostsWorker(action: PayloadAction<GetPostsPayload>) {
  yield put(setPostsLoading(true));
  const { _start, _sort, publishedAt_gt } = action.payload;
  const { data, status, problem } = yield call(
    Api.getBlogPostList,
    _start,
    _sort,
    publishedAt_gt
  );
  if (status === 200 && data) {
    yield put(setCardsList(data));
  } else {
    console.log("Sorry, but the list of posts was not received", problem);
  }
  yield getBlogPostsCountWorker();
  yield put(setPostsLoading(false));
}
function* getBlogPostsCountWorker() {
  const { data, status, problem } = yield call(Api.getBlogPostCount);
  if (status === 200 && data) {
    yield put(setCardsCount(data));
  } else {
    console.log("The number of posts was not received", problem);
  }
}

function* getSinglePostWorker(action: PayloadAction<string>) {
  yield put(setSinglePostLoading(true));
  const { data, status, problem } = yield call(Api.getPost, action.payload);
  if (status === 200 && data) {
    console.log(data);
    yield put(setSinglePost(data));
  } else {
    console.log("Sorry, but the card was not received", problem);
  }
  yield put(setSinglePostLoading(false));
}

function* getSingleBlogPostWorker(action: PayloadAction<string>) {
  yield put(setSinglePostLoading(true));
  const { data, status, problem } = yield call(Api.getBlogPost, action.payload);
  if (status === 200 && data) {
    console.log(data);
    yield put(setSinglePost(data));
  } else {
    console.log("Sorry, but the card was not received", problem);
  }
  yield put(setSinglePostLoading(false));
}

function* getSearchedPostsWorker(action: PayloadAction<SearchPostsPayload>) {
  yield put(setSearchPostsLoading(true));
  const { _start, isOverwrite, title_contains } = action.payload;

  const { data, status, problem } = yield call(
    Api.getSearchedPosts,
    title_contains,
    _start
  );
  if (status === 200 && data) {
    yield put(setSearchedPosts({ data: data, isOverwrite }));
  } else {
    console.log("Error getting search posts", problem);
  }
  yield put(setSearchPostsLoading(false));
}

function* getSearchedBlogPostsWorker(
  action: PayloadAction<SearchPostsPayload>
) {
  yield put(setSearchPostsLoading(true));
  const { _start, isOverwrite, title_contains } = action.payload;

  const { data, status, problem } = yield call(
    Api.getSearchedBlogPosts,
    title_contains,
    _start
  );
  if (status === 200 && data) {
    yield put(setSearchedPosts({ data: data, isOverwrite }));
  } else {
    console.log("Error getting search posts", problem);
  }
  yield put(setSearchPostsLoading(false));
}

function* getPostByBtnWorker(action: PayloadAction<GetPostsPayload>) {
  yield put(setPostsLoading(true));

  const { _start, _sort, publishedAt_gt } = action.payload;

  const { data, status, problem } = yield call(
    Api.getPostsByButton,
    _start,
    publishedAt_gt,
    _sort
  );

  if (status === 200 && data) {
    yield put(setCardsList(data));
  } else {
    console.log("Sorry, but the list of posts was not received", problem);
  }
  yield put(setPostsLoading(false));
}

function* getPostBlogByBtnWorker(action: PayloadAction<GetPostsPayload>) {
  yield put(setPostsLoading(true));

  const { _start, _sort, publishedAt_gt } = action.payload;

  const { data, status, problem } = yield call(
    Api.getPostBlogListByButton,
    _start,
    publishedAt_gt,
    _sort
  );

  if (status === 200 && data) {
    yield put(setCardsList(data));
  } else {
    console.log("Sorry, but the list of posts was not received", problem);
  }
  yield put(setPostsLoading(false));
}

export default function* postsSagaWatcher() {
  yield all([
    takeLatest(getPosts, getPostsWorker),
    takeLatest(getSinglePost, getSinglePostWorker),
    takeLatest(getPostsCount, getPostsCountWorker),
    takeLatest(searchForPosts, getSearchedPostsWorker),
    takeLatest(getBlogPosts, getBlogPostsWorker),
    takeLatest(getBlogPostsCount, getBlogPostsCountWorker),
    takeLatest(getSingleBlogPost, getSingleBlogPostWorker),
    takeLatest(searchForBlogPosts, getSearchedBlogPostsWorker),
    takeLatest(getPostsBtn, getPostByBtnWorker),
    takeLatest(getPostsBlogBtn, getPostBlogByBtnWorker),
  ]);
}

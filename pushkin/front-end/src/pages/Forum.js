import React from 'react';
import { connect } from 'react-redux';

import { fetchAllPosts, makePost, search, clearSearch } from '../actions/forum';
import ForumContent from '../components/Forum/ForumContent';
import ForumTrendingQuestions from '../components/Forum/ForumTrendingQuestions';
import QuizForum from '../components/Forum/QuizForum';
import SearchResultList from '../components/Forum/SearchResultList';

class Forum extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isModalOpen: false, posts: null };
  }
  componentDidMount() {
    this.props.dispatch(fetchAllPosts());
    // this.props.dispatch(getUserInfo());
  }
  makeForumPost = (post, cb) => {
    this.props.dispatch(makePost(post, cb));
  };
  // dispatchCheckLogin = () => {
  //   this.props.dispatch(checkLogin());
  // };
  handleLocalPostChange = () => {
    this.props.dispatch(fetchAllPosts()).then(res => {
      this.setState({ posts: res });
    });
  };
  executeSearch(q) {
    this.props.dispatch(search(q));
  }
  handleSubmit = e => {
    e.preventDefault();
    const q = this.refs.search.value;
    this.refs.search.value = '';
    if (q.length > 0) {
      this.executeSearch(q);
    }
  };
  showResults = () => {
    const { term, results } = this.props;
    const dispatchClearSearch = _ => this.props.dispatch(clearSearch());
    return (
      <SearchResultList
        results={results}
        term={term}
        clearSearch={dispatchClearSearch}
      />
    );
  };
  showPosts = () => {
    const { forum, userInfo, formData, posts, results } = this.props;
    return (
      <div>
        <QuizForum
          user={userInfo}
          fromForum
          // isAuthenticated={isAuthenticated}
          makeForumPost={this.makeForumPost}
          formData={formData}
          checkLogin={this.dispatchCheckLogin}
          // login={login}
          handleLocalPostChange={this.handleLocalPostChange}
        />
        <ForumContent posts={posts} />
      </div>
    );
  };
  render() {
    const { forum, userInfo, formData, posts, results } = this.props;
    return (
      <div className="styles_blurb_3jf">
        {this.props.children && <div>{this.props.children}</div>}
        {!this.props.children && (
          <div>
            <div>
              <div>
                <ForumTrendingQuestions />
              </div>
            </div>
            <div>
              <div>
                <form onSubmit={this.handleSubmit}>
                  <input ref="search" type="text" placeholder="Search Forum" />
                  <a href="#" onClick={this.handleSubmit}>
                    <img src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" />
                  </a>
                </form>
              </div>
              <div>
                {posts && !results && this.showPosts()}
                {results && this.showResults()}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.forum.posts,
    userInfo: state.userInfo.profile,
    formData: state.form,
    results: state.forum.results,
    term: state.forum.term
  };
};
export default connect(mapStateToProps)(Forum);

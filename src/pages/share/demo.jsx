import Task from "@/component/task";

export default function Tasks() {
  const tasks = [
    {
      url: "https://api.github.com/repos/cc5324/cotea/issues/2",
      repository_url: "https://api.github.com/repos/cc5324/cotea",
      labels_url:
        "https://api.github.com/repos/cc5324/cotea/issues/2/labels{/name}",
      comments_url:
        "https://api.github.com/repos/cc5324/cotea/issues/2/comments",
      events_url: "https://api.github.com/repos/cc5324/cotea/issues/2/events",
      html_url: "https://github.com/cc5324/cotea/issues/2",
      id: 1640532780,
      node_id: "I_kwDOIu_1nM5hyIss",
      number: 2,
      title: "test: issue 2",
      user: {
        login: "cc5324",
        id: 81091733,
        node_id: "MDQ6VXNlcjgxMDkxNzMz",
        avatar_url: "https://avatars.githubusercontent.com/u/81091733?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/cc5324",
        html_url: "https://github.com/cc5324",
        followers_url: "https://api.github.com/users/cc5324/followers",
        following_url:
          "https://api.github.com/users/cc5324/following{/other_user}",
        gists_url: "https://api.github.com/users/cc5324/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/cc5324/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/cc5324/subscriptions",
        organizations_url: "https://api.github.com/users/cc5324/orgs",
        repos_url: "https://api.github.com/users/cc5324/repos",
        events_url: "https://api.github.com/users/cc5324/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/cc5324/received_events",
        type: "User",
        site_admin: false,
      },
      labels: [],
      state: "open",
      locked: false,
      assignee: {
        login: "cc5324",
        id: 81091733,
        node_id: "MDQ6VXNlcjgxMDkxNzMz",
        avatar_url: "https://avatars.githubusercontent.com/u/81091733?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/cc5324",
        html_url: "https://github.com/cc5324",
        followers_url: "https://api.github.com/users/cc5324/followers",
        following_url:
          "https://api.github.com/users/cc5324/following{/other_user}",
        gists_url: "https://api.github.com/users/cc5324/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/cc5324/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/cc5324/subscriptions",
        organizations_url: "https://api.github.com/users/cc5324/orgs",
        repos_url: "https://api.github.com/users/cc5324/repos",
        events_url: "https://api.github.com/users/cc5324/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/cc5324/received_events",
        type: "User",
        site_admin: false,
      },
      assignees: [
        {
          login: "cc5324",
          id: 81091733,
          node_id: "MDQ6VXNlcjgxMDkxNzMz",
          avatar_url: "https://avatars.githubusercontent.com/u/81091733?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/cc5324",
          html_url: "https://github.com/cc5324",
          followers_url: "https://api.github.com/users/cc5324/followers",
          following_url:
            "https://api.github.com/users/cc5324/following{/other_user}",
          gists_url: "https://api.github.com/users/cc5324/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/cc5324/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/cc5324/subscriptions",
          organizations_url: "https://api.github.com/users/cc5324/orgs",
          repos_url: "https://api.github.com/users/cc5324/repos",
          events_url: "https://api.github.com/users/cc5324/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/cc5324/received_events",
          type: "User",
          site_admin: false,
        },
      ],
      milestone: null,
      comments: 0,
      created_at: "2023-03-25T14:14:28Z",
      updated_at: "2023-03-25T14:14:28Z",
      closed_at: null,
      author_association: "OWNER",
      active_lock_reason: null,
      repository: {
        id: 586151324,
        node_id: "R_kgDOIu_1nA",
        name: "cotea",
        full_name: "cc5324/cotea",
        private: false,
        owner: {
          login: "cc5324",
          id: 81091733,
          node_id: "MDQ6VXNlcjgxMDkxNzMz",
          avatar_url: "https://avatars.githubusercontent.com/u/81091733?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/cc5324",
          html_url: "https://github.com/cc5324",
          followers_url: "https://api.github.com/users/cc5324/followers",
          following_url:
            "https://api.github.com/users/cc5324/following{/other_user}",
          gists_url: "https://api.github.com/users/cc5324/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/cc5324/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/cc5324/subscriptions",
          organizations_url: "https://api.github.com/users/cc5324/orgs",
          repos_url: "https://api.github.com/users/cc5324/repos",
          events_url: "https://api.github.com/users/cc5324/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/cc5324/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/cc5324/cotea",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/cc5324/cotea",
        forks_url: "https://api.github.com/repos/cc5324/cotea/forks",
        keys_url: "https://api.github.com/repos/cc5324/cotea/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/cc5324/cotea/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/cc5324/cotea/teams",
        hooks_url: "https://api.github.com/repos/cc5324/cotea/hooks",
        issue_events_url:
          "https://api.github.com/repos/cc5324/cotea/issues/events{/number}",
        events_url: "https://api.github.com/repos/cc5324/cotea/events",
        assignees_url:
          "https://api.github.com/repos/cc5324/cotea/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/cc5324/cotea/branches{/branch}",
        tags_url: "https://api.github.com/repos/cc5324/cotea/tags",
        blobs_url: "https://api.github.com/repos/cc5324/cotea/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/cc5324/cotea/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/cc5324/cotea/git/refs{/sha}",
        trees_url: "https://api.github.com/repos/cc5324/cotea/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/cc5324/cotea/statuses/{sha}",
        languages_url: "https://api.github.com/repos/cc5324/cotea/languages",
        stargazers_url: "https://api.github.com/repos/cc5324/cotea/stargazers",
        contributors_url:
          "https://api.github.com/repos/cc5324/cotea/contributors",
        subscribers_url:
          "https://api.github.com/repos/cc5324/cotea/subscribers",
        subscription_url:
          "https://api.github.com/repos/cc5324/cotea/subscription",
        commits_url: "https://api.github.com/repos/cc5324/cotea/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/cc5324/cotea/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/cc5324/cotea/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/cc5324/cotea/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/cc5324/cotea/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/cc5324/cotea/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/cc5324/cotea/merges",
        archive_url:
          "https://api.github.com/repos/cc5324/cotea/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/cc5324/cotea/downloads",
        issues_url: "https://api.github.com/repos/cc5324/cotea/issues{/number}",
        pulls_url: "https://api.github.com/repos/cc5324/cotea/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/cc5324/cotea/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/cc5324/cotea/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/cc5324/cotea/labels{/name}",
        releases_url: "https://api.github.com/repos/cc5324/cotea/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/cc5324/cotea/deployments",
        created_at: "2023-01-07T05:33:19Z",
        updated_at: "2023-01-07T05:33:49Z",
        pushed_at: "2023-01-12T18:51:17Z",
        git_url: "git://github.com/cc5324/cotea.git",
        ssh_url: "git@github.com:cc5324/cotea.git",
        clone_url: "https://github.com/cc5324/cotea.git",
        svn_url: "https://github.com/cc5324/cotea",
        homepage: null,
        size: 365,
        stargazers_count: 0,
        watchers_count: 0,
        language: "CSS",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 2,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 2,
        watchers: 0,
        default_branch: "main",
        permissions: {
          admin: true,
          maintain: true,
          push: true,
          triage: true,
          pull: true,
        },
      },
      body: "issue 2",
      reactions: {
        url: "https://api.github.com/repos/cc5324/cotea/issues/2/reactions",
        total_count: 0,
        "+1": 0,
        "-1": 0,
        laugh: 0,
        hooray: 0,
        confused: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
      timeline_url:
        "https://api.github.com/repos/cc5324/cotea/issues/2/timeline",
      performed_via_github_app: null,
      state_reason: null,
    },
    {
      url: "https://api.github.com/repos/cc5324/cotea/issues/1",
      repository_url: "https://api.github.com/repos/cc5324/cotea",
      labels_url:
        "https://api.github.com/repos/cc5324/cotea/issues/1/labels{/name}",
      comments_url:
        "https://api.github.com/repos/cc5324/cotea/issues/1/comments",
      events_url: "https://api.github.com/repos/cc5324/cotea/issues/1/events",
      html_url: "https://github.com/cc5324/cotea/issues/1",
      id: 1640532637,
      node_id: "I_kwDOIu_1nM5hyIqd",
      number: 1,
      title: "test: issue 1",
      user: {
        login: "cc5324",
        id: 81091733,
        node_id: "MDQ6VXNlcjgxMDkxNzMz",
        avatar_url: "https://avatars.githubusercontent.com/u/81091733?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/cc5324",
        html_url: "https://github.com/cc5324",
        followers_url: "https://api.github.com/users/cc5324/followers",
        following_url:
          "https://api.github.com/users/cc5324/following{/other_user}",
        gists_url: "https://api.github.com/users/cc5324/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/cc5324/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/cc5324/subscriptions",
        organizations_url: "https://api.github.com/users/cc5324/orgs",
        repos_url: "https://api.github.com/users/cc5324/repos",
        events_url: "https://api.github.com/users/cc5324/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/cc5324/received_events",
        type: "User",
        site_admin: false,
      },
      labels: [],
      state: "open",
      locked: false,
      assignee: {
        login: "cc5324",
        id: 81091733,
        node_id: "MDQ6VXNlcjgxMDkxNzMz",
        avatar_url: "https://avatars.githubusercontent.com/u/81091733?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/cc5324",
        html_url: "https://github.com/cc5324",
        followers_url: "https://api.github.com/users/cc5324/followers",
        following_url:
          "https://api.github.com/users/cc5324/following{/other_user}",
        gists_url: "https://api.github.com/users/cc5324/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/cc5324/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/cc5324/subscriptions",
        organizations_url: "https://api.github.com/users/cc5324/orgs",
        repos_url: "https://api.github.com/users/cc5324/repos",
        events_url: "https://api.github.com/users/cc5324/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/cc5324/received_events",
        type: "User",
        site_admin: false,
      },
      assignees: [
        {
          login: "cc5324",
          id: 81091733,
          node_id: "MDQ6VXNlcjgxMDkxNzMz",
          avatar_url: "https://avatars.githubusercontent.com/u/81091733?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/cc5324",
          html_url: "https://github.com/cc5324",
          followers_url: "https://api.github.com/users/cc5324/followers",
          following_url:
            "https://api.github.com/users/cc5324/following{/other_user}",
          gists_url: "https://api.github.com/users/cc5324/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/cc5324/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/cc5324/subscriptions",
          organizations_url: "https://api.github.com/users/cc5324/orgs",
          repos_url: "https://api.github.com/users/cc5324/repos",
          events_url: "https://api.github.com/users/cc5324/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/cc5324/received_events",
          type: "User",
          site_admin: false,
        },
      ],
      milestone: null,
      comments: 0,
      created_at: "2023-03-25T14:14:01Z",
      updated_at: "2023-03-25T14:14:08Z",
      closed_at: null,
      author_association: "OWNER",
      active_lock_reason: null,
      repository: {
        id: 586151324,
        node_id: "R_kgDOIu_1nA",
        name: "cotea",
        full_name: "cc5324/cotea",
        private: false,
        owner: {
          login: "cc5324",
          id: 81091733,
          node_id: "MDQ6VXNlcjgxMDkxNzMz",
          avatar_url: "https://avatars.githubusercontent.com/u/81091733?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/cc5324",
          html_url: "https://github.com/cc5324",
          followers_url: "https://api.github.com/users/cc5324/followers",
          following_url:
            "https://api.github.com/users/cc5324/following{/other_user}",
          gists_url: "https://api.github.com/users/cc5324/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/cc5324/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/cc5324/subscriptions",
          organizations_url: "https://api.github.com/users/cc5324/orgs",
          repos_url: "https://api.github.com/users/cc5324/repos",
          events_url: "https://api.github.com/users/cc5324/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/cc5324/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/cc5324/cotea",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/cc5324/cotea",
        forks_url: "https://api.github.com/repos/cc5324/cotea/forks",
        keys_url: "https://api.github.com/repos/cc5324/cotea/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/cc5324/cotea/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/cc5324/cotea/teams",
        hooks_url: "https://api.github.com/repos/cc5324/cotea/hooks",
        issue_events_url:
          "https://api.github.com/repos/cc5324/cotea/issues/events{/number}",
        events_url: "https://api.github.com/repos/cc5324/cotea/events",
        assignees_url:
          "https://api.github.com/repos/cc5324/cotea/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/cc5324/cotea/branches{/branch}",
        tags_url: "https://api.github.com/repos/cc5324/cotea/tags",
        blobs_url: "https://api.github.com/repos/cc5324/cotea/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/cc5324/cotea/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/cc5324/cotea/git/refs{/sha}",
        trees_url: "https://api.github.com/repos/cc5324/cotea/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/cc5324/cotea/statuses/{sha}",
        languages_url: "https://api.github.com/repos/cc5324/cotea/languages",
        stargazers_url: "https://api.github.com/repos/cc5324/cotea/stargazers",
        contributors_url:
          "https://api.github.com/repos/cc5324/cotea/contributors",
        subscribers_url:
          "https://api.github.com/repos/cc5324/cotea/subscribers",
        subscription_url:
          "https://api.github.com/repos/cc5324/cotea/subscription",
        commits_url: "https://api.github.com/repos/cc5324/cotea/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/cc5324/cotea/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/cc5324/cotea/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/cc5324/cotea/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/cc5324/cotea/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/cc5324/cotea/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/cc5324/cotea/merges",
        archive_url:
          "https://api.github.com/repos/cc5324/cotea/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/cc5324/cotea/downloads",
        issues_url: "https://api.github.com/repos/cc5324/cotea/issues{/number}",
        pulls_url: "https://api.github.com/repos/cc5324/cotea/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/cc5324/cotea/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/cc5324/cotea/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/cc5324/cotea/labels{/name}",
        releases_url: "https://api.github.com/repos/cc5324/cotea/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/cc5324/cotea/deployments",
        created_at: "2023-01-07T05:33:19Z",
        updated_at: "2023-01-07T05:33:49Z",
        pushed_at: "2023-01-12T18:51:17Z",
        git_url: "git://github.com/cc5324/cotea.git",
        ssh_url: "git@github.com:cc5324/cotea.git",
        clone_url: "https://github.com/cc5324/cotea.git",
        svn_url: "https://github.com/cc5324/cotea",
        homepage: null,
        size: 365,
        stargazers_count: 0,
        watchers_count: 0,
        language: "CSS",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 2,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 2,
        watchers: 0,
        default_branch: "main",
        permissions: {
          admin: true,
          maintain: true,
          push: true,
          triage: true,
          pull: true,
        },
      },
      body: "issue 1",
      reactions: {
        url: "https://api.github.com/repos/cc5324/cotea/issues/1/reactions",
        total_count: 0,
        "+1": 0,
        "-1": 0,
        laugh: 0,
        hooray: 0,
        confused: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
      timeline_url:
        "https://api.github.com/repos/cc5324/cotea/issues/1/timeline",
      performed_via_github_app: null,
      state_reason: null,
    },
  ];
  const taskItems = tasks.map(({ id, state, title, body, user }) => (
    <Task
      title={title}
      body={body}
      avatar={user.avatar_url}
      key={id}
      state={state}
    />
  ));
  return (
    <div className="bg-gray-300 p-3 grid gap-3">
      {/* <Task /> */}
      {taskItems}
    </div>
  );
}

const filter = (posts, sort) => {
  switch (sort) {
    case "RECENT":
      return [...posts].sort(
        (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
      );

    case "TRENDING":
      return [...posts].sort((a, b) => b.likes.likeCount - a.likes.likeCount);

    case "OLDTONEW":
      return [...posts].sort(
        (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)
      );
    case "NEWTOOLD":
      return [...posts].sort(
        (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
      );
    default:
      return posts;
  }
};

export { filter };

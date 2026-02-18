const Filters = ({
  search,
  setSearch,
  category,
  setCategory,
  sort,
  setSort,
}) => {
  return (
    <div className="flex flex-wrap gap-4 p-4 justify-center">
      <input
        type="text"
        placeholder="Search..."
        className="border p-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="border p-2"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
      </select>

      <select
        className="border p-2"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="">Sort By</option>
        <option value="low-high">Price: Low to High</option>
        <option value="high-low">Price: High to Low</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
};

export default Filters;

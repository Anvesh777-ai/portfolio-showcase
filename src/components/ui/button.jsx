export function Button({ children, asChild = false }) {
    const Component = asChild ? "span" : "button";
    return (
      <Component className="inline-block px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
        {children}
      </Component>
    );
  }
  
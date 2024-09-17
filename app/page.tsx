import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Eisuke Hirata/平田叡佑
      </h1>
      <p className="mb-4">{`I'm Eisuke Hirata`}</p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}

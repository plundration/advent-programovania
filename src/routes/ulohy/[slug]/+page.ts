import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ params }) => {
    const post = await import(`../md/${params.slug}.md`);
    const content = post.default;

    return { content, };
};
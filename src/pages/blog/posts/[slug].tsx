import { useRouter } from "next/router"

export default function PostPage() {
    const router = useRouter();
    console.log("post " + router.query.slug);

    const slugPost = router.query.slug;


    return (
        <div>
            <h2>post: {slugPost}</h2>
        </div>
    )
}
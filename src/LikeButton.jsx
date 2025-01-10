import { useState } from "react";

export default function LikeButton() {
    const [isLiked, setIsLiked] = useState(false);

    const ToggleLike = () => {
        setIsLiked(!isLiked);
    };

    return (
        <div>
            <p onClick={ToggleLike}>
                {isLiked ? (
                    <i className="fa-solid fa-thumbs-up"></i>
                ) : (
                    <i className="fa-regular fa-thumbs-up"></i>
                )}
            </p>
        </div>
    );
}

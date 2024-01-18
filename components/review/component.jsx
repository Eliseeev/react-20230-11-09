import { UserContainer } from "../user/container"
import styles from './styles.module.css'
import { useCallback, useState } from "react";
import { Button } from "../btn-change-theme/component";
import { UpdateReviewContainer } from "../update-review-from/container";

export const Review = ({review}) => {

    const [isEditing, setIsEditing] = useState(false)

    const onUpdateFinished = useCallback(() => setIsEditing(false), []);

    if(!review) return null

    return <div>
                <Button onClick = {() => setIsEditing(!isEditing)}>Edit a review</Button>

                {isEditing ? 
                (<UpdateReviewContainer review = {review} onUpdateFinished={onUpdateFinished}/>) 
                :
                    (<div className = {styles.review}>
                        <div className={styles.user}>
                            <div className={styles.block}><UserContainer userId = {review.userId} /></div>
                            <div className={styles.block}><em> - {review.text}</em></div>
                        </div>
                        <p>My assessment: {review.rating}</p>
                    </div>)}
            </div>
}
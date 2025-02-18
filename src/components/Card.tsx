import type { Candidate } from "../interfaces/Candidate.interface";
import './card.css'

interface CardProps {
    user: Candidate;
}
//Access items from Candidate Interface
const Card = ({user}:CardProps) => {
  return (
    <div className="card">
        <img src={user.avatar_url} alt="user image" />
        <div className="username">{user?.login}</div>
        <div className="info">Location: {user?.location}</div>
        <div className="info">E-Mail: {user?.email}</div>
        <div className="info">Company: {user?.company}</div>
        <div className="info">Bio: {user?.bio}</div>
        <div className="info">Repository URL: {user?.html_url}</div>
    </div>
  )
}

export default Card
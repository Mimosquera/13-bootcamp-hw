// interface used for API canidate information
export interface Candidate{
    avatar_url: string;
    login: string;
    location: string | null;
    email: string | null;
    company: string | null;
    bio: string | null;
    html_url: string;
}
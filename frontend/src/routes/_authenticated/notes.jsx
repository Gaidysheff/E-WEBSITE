import { useEffect, useState } from "react";

import Note from "@/components/note/Note"
import api from "@/api";
import { createFileRoute } from '@tanstack/react-router'

// import "../styles/Home.css"

export const Route = createFileRoute('/_authenticated/notes')({
  component: RouteComponent,
})

function RouteComponent() {
		const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

		useEffect(() => {
        getNotes();
    }, []);

		const getNotes = () => {
        api
            .get("/api/notes/")
            .then((res) => res.data)
            .then((data) => {
                setNotes(data);
                console.log("🚀 ~ getNotes ~ data:", data)
            })
            .catch((err) => alert(err));
    };

		const deleteNote = (id) => {
        api
            .delete(`/api/notes/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Note deleted!");
                else alert("Failed to delete note.");
                getNotes();
            })
            .catch((error) => alert(error));
    };

		const createNote = (event) => {
        event.preventDefault();
        api
            .post("/api/notes/", { content, title })
            .then((res) => {
                if (res.status === 201) alert("Note created!");
                else alert("Failed to make note.");
                getNotes();
            })
            .catch((err) => alert(err));
    };

		
  return (
				<>
            <div>
                <h2>Notes</h2>
                {notes.map((note) => (
                    <Note note={note} onDelete={deleteNote} key={note.id} />
                ))}
            </div>
						
            <h2>Create a Note</h2>
            <form onSubmit={createNote}>
                <label htmlFor="title">Title:</label>
                <br />
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    onChange={(event) => setTitle(event.target.value)}
                    value={title}
                />
                <label htmlFor="content">Content:</label>
                <br />
                <textarea
                    id="content"
                    name="content"
                    required
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                ></textarea>
                <br />
                <input type="submit" className="bg-green-300 cursor-pointer" value="Submit"></input>
            </form>
        </>
	)
}

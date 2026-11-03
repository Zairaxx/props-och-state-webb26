function StudentList ({students,namn}){

    return(
        <>
            <h2>Elevlista - Lärare: {namn}</h2>
            <ul>
                {students.map(elev => <li>{elev}</li>)}
            </ul>
        </>
    )
}

export default StudentList;
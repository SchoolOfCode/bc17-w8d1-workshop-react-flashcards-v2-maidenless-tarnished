

export default function Flashcards({flashcards}) {
    return (
        <section>
            {flashcards.map(() => {
                return (
                    <>
                     {flashcards.question}
                    </>
                )
            })}
        </section>
    )
}
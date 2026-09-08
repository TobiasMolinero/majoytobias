import { useState } from "react";

type Attendance = "yes" | "no" | null;

export default function AttendanceForm() {
  const [attendance, setAttendance] = useState<Attendance>(null);
  const [guests, setGuests] = useState("1");
  const [food, setFood] = useState("Ninguno");
  const [comments, setComments] = useState("");

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      name: event.currentTarget.name.value,
      attendance,
      guests: attendance === "yes" ? guests : "0",
      food,
      comments,
    };

    console.log(data);

    // Más adelante podemos enviar `data` a Google Sheets.
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-115 space-y-6 p-8 rounded-3xl bg-cream"
    >
      {/* Nombre */}
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="font-body block text-xs font-medium uppercase tracking-[0.2em] text-petroleum"
        >
          Nombre y apellido <span>*</span>
        </label>

        <input
          id="name"
          name="name"
          type="text"
          placeholder="Escribí tu nombre completo"
          required
          className="
            font-body
            h-10
            w-full
            rounded-xl
            border border-earth/20
            bg-ivory/50
            px-3
            text-sm
            text-charcoal
            outline-none
            placeholder:text-earth/50
            focus:border-petroleum
            focus:ring-1
            focus:ring-petroleum
          "
        />
      </div>

      {/* Asistencia */}
      <div className="space-y-2">
        <label className="font-body block text-xs font-medium uppercase tracking-[0.2em] text-petroleum">
          ¿Asistís? <span>*</span>
        </label>

        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => setAttendance("yes")}
            className={`
              font-body
              h-10
              rounded-xl
              border
              text-xs
              uppercase
              cursor-pointer
              tracking-[0.15em]
              transition-all
              ${
                attendance === "yes"
                  ? "border-charcoal bg-charcoal text-ivory"
                  : "border-earth/20 bg-ivory/50 text-charcoal hover:border-earth/40"
              }
            `}
          >
            {attendance === "yes" && "✓ "}
            Sí
          </button>

          <button
            type="button"
            onClick={() => setAttendance("no")}
            className={`
              font-body
              h-10
              rounded-xl
              border
              text-xs
              uppercase
              cursor-pointer
              tracking-[0.15em]
              transition-all
              ${
                attendance === "no"
                  ? "border-charcoal bg-charcoal text-ivory"
                  : "border-earth/20 bg-ivory/50 text-charcoal hover:border-earth/40"
              }
            `}
          >
            {attendance === "no" && "✓ "}
            No
          </button>
        </div>

        {/* Cantidad de personas */}
        {attendance === "yes" && (
          <div className="space-y-2 pt-2">
            <label
              htmlFor="guests"
              className="font-body block text-xs font-medium uppercase tracking-[0.2em] text-petroleum"
            >
              ¿Cuántas personas asistirán?
            </label>

            <select
              id="guests"
              value={guests}
              onChange={(event) => setGuests(event.target.value)}
              className="
                font-body
                h-10
                w-full
                appearance-auto
                rounded-xl
                border
                border-earth/20
                bg-ivory/50
                px-3
                text-sm
                text-charcoal
                outline-none
                focus:border-petroleum
                focus:ring-1
                focus:ring-petroleum
              "
            >
              <option value="1">1 persona</option>
              <option value="2">2 personas</option>
              <option value="3">3 personas</option>
              <option value="4">4 personas</option>
              <option value="5">5 personas</option>
              <option value="6">6 personas</option>
            </select>
          </div>
        )}
      </div>

      {/* Requerimientos alimentarios */}
      <div className="space-y-2">
        <label
          htmlFor="food"
          className="font-body block text-xs font-medium uppercase tracking-[0.2em] text-petroleum"
        >
          Requerimientos alimentarios
        </label>

        <select
          id="food"
          value={food}
          onChange={(event) => setFood(event.target.value)}
          className="
            font-body
            h-10
            w-full
            rounded-xl
            border
            border-earth/20
            bg-ivory/50
            px-3
            text-sm
            text-charcoal
            outline-none
            focus:border-petroleum
            focus:ring-1
            focus:ring-petroleum
          "
        >
          <option>Ninguno</option>
          <option>Vegetariano</option>
          <option>Vegano</option>
          <option>Celíaco</option>
          <option>Sin lactosa</option>
          <option>Otro</option>
        </select>
      </div>

      {/* Comentarios */}
      <div className="space-y-2">
        <label
          htmlFor="comments"
          className="font-body block text-xs font-medium uppercase tracking-[0.2em] text-petroleum"
        >
          Comentarios{" "}
          <span className="text-earth/60">(opcional)</span>
        </label>

        <textarea
          id="comments"
          name="comments"
          value={comments}
          onChange={(event) => setComments(event.target.value)}
          placeholder="Mensaje o alguna indicación para los novios..."
          rows={3}
          className="
            font-body
            w-full
            resize-none
            rounded-xl
            border
            border-earth/20
            bg-ivory/50
            px-3
            py-3
            text-sm
            text-charcoal
            outline-none
            placeholder:text-earth/50
            focus:border-petroleum
            focus:ring-1
            focus:ring-petroleum
          "
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={!attendance}
        className="
          font-body
          h-10
          w-full
          rounded-full
          bg-petroleum
          px-6
          text-xs
          font-medium
          uppercase
          tracking-[0.2em]
          text-ivory
          shadow-md
          transition-all
          hover:brightness-110
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        Confirmar asistencia
      </button>
    </form>
  );
}
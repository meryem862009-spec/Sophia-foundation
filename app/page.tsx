tsx
export default function Home() {
  return (
    <main style={{ padding: "3rem", textAlign: "center" }}>
      <h1 style={{ fontFamily: "Playfair Display, serif", color: "#D4AF37" }}>
        🧸 The Sophia Foundation
      </h1>
      <p style={{ fontSize: "1.1rem", marginTop: "1rem" }}>
        Raising hope and awareness for DIPG — donations, family resources, and stories
        of impact.
      </p>
      <button
        style={{
          backgroundColor: "#F7C6D0",
          border: "none",
          borderRadius: "12px",
          padding: "0.75rem 1.5rem",
          fontSize: "1rem",
          marginTop: "2rem",
          cursor: "pointer",
        }}
        onClick={() => alert("Donation flow coming soon")}
      >
        Donate Now
      </button>
    </main>
  );
}

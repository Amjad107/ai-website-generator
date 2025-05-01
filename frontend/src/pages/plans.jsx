import React from 'react';

export default function PlansPage() {
  const handleSubscribe = async () => {
    const res = await fetch("http://localhost:3001/api/payments/create-checkout-session", { method: "POST" });
    const data = await res.json();
    window.location.href = data.url;
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6">Choose Your Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["Free", "Pro", "Enterprise"].map((plan, i) => (
          <div key={i} className="border p-6 rounded-lg shadow-sm bg-white">
            <h3 className="text-xl font-semibold mb-2">{plan}</h3>
            <p className="mb-4">{plan === "Free" ? "Basic features" : "Advanced features and support"}</p>
            {plan === "Free" ? (
              <button className="bg-gray-400 text-white px-4 py-2 rounded" disabled>Free</button>
            ) : (
              <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSubscribe}>Subscribe</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

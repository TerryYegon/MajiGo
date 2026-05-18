export default function FeaturesSection() {
  const features = [
    {
      icon: '🚚',
      title: 'Fast Delivery',
      description: 'Get clean water delivered within hours',
    },
    {
      icon: '💧',
      title: 'Quality Assured',
      description: 'All vendors are verified and tested',
    },
    {
      icon: '💰',
      title: 'Best Prices',
      description: 'Compare prices from multiple vendors',
    },
    {
      icon: '📱',
      title: 'Easy Ordering',
      description: 'Simple form, quick checkout',
    },
  ];

  return (
    <>
      <section className="w-full bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Why Choose MajiGo?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex items-center justify-center">
            <img src="/logo.jpg" alt="MajiGo Logo" className="w-40 h-40 object-contain" />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About MajiGo</h2>
            <p className="text-gray-600 mb-4">
              MajiGo connects households and businesses with verified water vendors
              for fast, reliable delivery. We make clean water accessible by
              matching local demand with nearby suppliers, offering transparent
              pricing and simple ordering.
            </p>

            <p className="text-gray-600 mb-4">
              Our mission is to improve access to clean water through a
              user-friendly platform that prioritizes quality, safety, and
              community support. We work closely with vendors to ensure
              sanitation standards and timely deliveries.
            </p>

            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Verified local vendors and quality checks</li>
              <li>Transparent pricing and easy comparisons</li>
              <li>Fast delivery across participating counties</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

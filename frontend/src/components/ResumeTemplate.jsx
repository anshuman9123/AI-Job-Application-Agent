const ResumeTemplate = () => {
  return (
    <div className="max-w-[850px] mx-auto bg-white shadow-lg p-10 text-gray-900 font-sans">

      {/* Header */}
      <div className="text-center border-b pb-4">
        <h1 className="text-3xl font-bold uppercase">
          Anshuman Kumar
        </h1>

        <p className="text-lg mt-1">
          Python Backend Developer
        </p>

        <p className="text-sm text-gray-600 mt-2">
          📍 Bhopal, India | 📞 +91 9876543210 | 📧 anshuman@gmail.com
        </p>

        <p className="text-sm text-blue-600">
          LinkedIn | GitHub
        </p>
      </div>

      {/* Career Summary */}

      <div className="mt-6">
        <h2 className="text-lg font-bold uppercase border-b pb-1">
          Career Summary
        </h2>

        <p className="mt-3 text-[15px] leading-7">
          Passionate Backend Developer with experience in Python,
          FastAPI, REST APIs and AI applications.
          Strong problem-solving skills and hands-on experience
          building scalable backend systems.
        </p>
      </div>

    </div>
  );
};

export default ResumeTemplate;
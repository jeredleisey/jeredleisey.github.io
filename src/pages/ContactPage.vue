<template>
  <section class="text-gray-600 body-font relative h-screen z-10">
    <div class="absolute inset-0 bg-gray-300">
      <iframe
        style="filter: grayscale(0.8) contrast(1.2) opacity(0.4)"
        marginheight="0"
        marginwidth="0"
        title="map"
        scrolling="no"
        src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Washington+DC&amp;ie=UTF8&amp;t=&amp;z=12&amp;iwloc=B&amp;output=embed"
        width="100%"
        height="100%"
        frameborder="0"
      ></iframe>
    </div>
    <div class="container px-5 py-24 mx-auto flex">
      <div
        class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 relative z-10 shadow-md"
      >
        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
          Get in touch
        </h2>
        <p class="leading-relaxed mb-5 text-gray-600">
          Whether you are looking to hire me or just say hi, I can't wait to
          hear from you!
        </p>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600"
            >Email</label
          >
          <input
            type="email"
            id="email"
            name="email"
            class="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="message" class="leading-7 text-sm text-gray-600"
            >Message</label
          >
          <textarea
            id="message"
            name="message"
            class="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <button
          class="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg"
        >
          Send
        </button>
        <p class="text-xs text-gray-500 mt-3">
          Don't worry, you're not signing up for anything.
        </p>
      </div>
    </div>
  </section>
</template>

import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id='contact' className='relative py-16 md:py-20 px-4 z-10'>
      <div className='container mx-auto'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-6 text-center text-white'>
          Let's Chat!
        </h2>
        <div className='max-w-md mx-auto text-center'>
          <p className='w-[95%] md:w-full mx-auto text-base md:text-lg text-muted-foreground mb-12 md:mb-12 text-center'>
            If you're interested in working together, feel free to reach out.
          </p>
        </div>

        {/* Form */}
        <div className='flex items-center bg-gray-800 max-w-2xl mx-auto rounded-md'>
          <div className='container mx-auto'>
            <div className='max-w-md mx-auto my-10 bg-gray-800 p-5 rounded-md shadow-sm'>
              <div className='m-7'>
                <form
                  action='https://api.web3forms.com/submit'
                  method='POST'
                  id='form'
                >
                  <input
                    type='hidden'
                    name='access_key'
                    value='10182021-9add-439e-89e2-574bd44cf114'
                  />
                  <input
                    type='hidden'
                    name='subject'
                    value='New Submission from Web3Forms'
                  />

                  <div className='mb-6'>
                    <label
                      htmlFor='name'
                      className='block mb-2 text-sm text-gray-400'
                    >
                      Full Name
                    </label>
                    <input
                      type='text'
                      name='name'
                      id='name'
                      placeholder='John Doe'
                      required
                      className='w-full px-3 py-2 h-12 rounded-sm placeholder-gray-500 text-gray-900 bg-gray-100 text-sm focus:outline-none'
                    />
                  </div>
                  <div className='mb-6'>
                    <label
                      htmlFor='email'
                      className='block mb-2 text-sm text-gray-400'
                    >
                      Email Address
                    </label>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      placeholder='you@company.com'
                      required
                      className='w-full px-3 py-2 h-12 rounded-sm placeholder-gray-500 text-gray-900 bg-gray-100 text-sm focus:outline-none'
                    />
                  </div>

                  <div className='mb-6'>
                    <label
                      htmlFor='message'
                      className='block mb-2 text-sm text-gray-400'
                    >
                      Your Message
                    </label>

                    <textarea
                      rows={5}
                      name='message'
                      id='message'
                      placeholder='Your Message'
                      className='w-full px-3 py-2 rounded-sm placeholder-gray-500 text-gray-900 bg-gray-100 text-sm focus:outline-none'
                      required
                    ></textarea>
                  </div>
                  <div className='mb-6'>
                    <button
                      type='submit'
                      className='w-full bg-indigo-600 inline-block text-white no-underline hover:text-indigo-100 py-4 px-4 rounded-sm focus:outline-none'
                    >
                      Send Message
                    </button>
                  </div>
                  <p
                    className='text-base text-center text-gray-400'
                    id='result'
                  ></p>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center gap-4 mt-12'>
          {/* Email */}
          <a href={'mailto:karlgeorge87@gmail.com'} target='_blank'>
            <div className='p-4  bg-gray-800 hover:bg-blue-700 text-muted-foreground hover:text-white rounded-full w-fit'>
              <Mail className='h-10 w-10' />
            </div>
          </a>
          {/* Linkedin */}
          <a href={'https://www.linkedin.com/in/karlgeorge87'} target='_blank'>
            <div className='p-4  bg-gray-800 hover:bg-blue-700 text-muted-foreground hover:text-white rounded-full w-fit'>
              <Linkedin className='h-10 w-10' />
            </div>
          </a>
          {/* Github */}
          <a href={'https://github.com/karl-george'} target='_blank'>
            <div className='p-4  bg-gray-800 hover:bg-blue-700 text-muted-foreground hover:text-white rounded-full w-fit'>
              <Github className='h-10 w-10' />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

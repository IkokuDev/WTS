import { LucideProps } from 'lucide-react'

export const Icons = {
  logo: (props: LucideProps) => (
    <svg {...props} viewBox='0 0 512 512'>
      <g>
        <path d="M0 0h500v500H0V0Z" fill="#7FFFD4"/>
        <path d="M0 0h500v500H0V0Zm128 91-1.706 1.321c-36.486 28.66-61.482 68.745-72.044 113.804l-.603 2.563c-2.956 13.353-4.09 26.78-4.084 40.437l-.003 2.195c.08 30.216 7.113 59.585 20.44 86.68l1.038 2.146c22.83 46.778 65.357 82.725 114.231 99.95C235.198 456.633 290.776 453.583 338 430l2.128-1.034C374.301 412.296 404.483 384.233 423 351l1.289-2.296c6.777-12.19 12.457-24.416 16.711-37.704l.726-2.252c15.994-50.712 9.522-105.535-14.476-152.435A188.66 188.66 0 0 0 409 128l-1.321-1.706C392.11 106.474 373.05 89.286 351 77l-2.296-1.289C336.506 68.93 324.282 63.292 311 59l-2.123-.71C248.05 38.259 178.174 51.965 128 91Z" fill="#FEFEFE"/><path d="M77 309h346c-3.384 11.279-3.384 11.279-5.129 15.008l-1.182 2.526-1.252 2.591-1.323 2.751C407.83 344.684 400.439 356.273 391 367l-2.14 2.473A344.389 344.389 0 0 1 382 377l-2.637 2.836c-30.323 31.868-76.468 52.302-120.484 53.465a600.18 600.18 0 0 1-7.317.012l-3.925-.011c-15.688-.175-31.586-1.656-46.637-6.302l-3.836-1.102c-28.351-8.512-52.68-23.79-74.164-43.898l-2.84-2.64c-15.38-14.637-26.864-32.132-36.035-51.173l-1.12-2.315C80.379 320.255 78.82 315.07 77 309Z" fill="#293A47"/><path d="m372 91 1.715 1.326c40.531 31.844 68.442 79.226 75.16 130.487 3.141 26.874 1.752 55.135-5.875 81.187l-.686 2.381C433.196 337.36 417.175 364.638 395 388l-1.478 1.577C381.015 402.842 366.957 414.109 351 423l-2.296 1.289C336.506 431.07 324.282 436.708 311 441l-2.123.71c-49.209 16.206-103.744 9.902-149.598-12.942-11.121-5.69-21.421-12.099-31.279-19.768l-1.706-1.321C106.474 392.11 89.286 373.05 77 351l-1.289-2.296C68.931 336.51 63.276 324.284 59 311l-.71-2.155c-16.148-49.931-9.848-104.961 13.673-151.427 24.62-46.965 68.034-83.393 118.671-99.242C252.624 39.935 320.676 51.315 372 91Zm-254 23c-.84.768-1.68 1.537-2.547 2.328-6.556 6.277-12.016 13.43-17.453 20.672l-1.902 2.523C70.239 175.178 59.622 216.323 61 260c.022 1.385.043 2.77.063 4.156.69 19.139 5.835 38.158 12.937 55.844l.917 2.314c18.541 46.062 56.08 82.437 101.159 102.492C203.073 436.274 230.882 439.919 260 439c1.385-.022 2.77-.043 4.156-.063 46.55-1.677 92.041-25.861 123.996-58.902C417.912 347.255 437.73 304.601 439 260l.099-2.883c1.663-54.706-18.57-101.72-55.31-141.512C352.595 83.33 305.82 62.304 261 61l-2.934-.099C204.518 59.325 157.288 77.925 118 114Z" fill="#2B3D49"/><path d="M285 128v5h5c1.333 3.998 1.084 7.805 1.022 11.97l-.03 2.78c-.032 3.035-.073 6.07-.113 9.105l-.072 6.31c-.063 5.539-.132 11.077-.202 16.616-.07 5.65-.135 11.3-.2 16.951-.13 11.09-.265 22.179-.405 33.268l2.539-1.01a6071.44 6071.44 0 0 1 9.314-3.69c1.345-.532 2.69-1.066 4.033-1.6 1.93-.768 3.862-1.531 5.794-2.294l3.523-1.396C318 219 318 219 320 219l-.092-3.326c-.114-4.153-.225-8.305-.335-12.458-.048-1.782-.096-3.564-.146-5.346-.312-11.294-.498-22.572-.427-33.87h1c1.274 10.587 1.306 21.227 1.5 31.875.279 16.132.279 16.132.96 32.25l.21 4.024c.133 2.416.287 4.832.465 7.245.454 8.623.454 8.623-2.322 12.211-2.568 2.187-4.593 3.562-7.688 4.833-8.216 3.846-12.499 9.914-17.512 17.273-1.966 2.79-4.048 5.036-6.613 7.289l-1.664 1.523c-7.804 6.584-17.3 8.029-27.293 7.778-13.03-1.288-13.03-1.288-16.043-4.301-.04-2.333-.042-4.667 0-7l-2.605.621c-6.023 1.373-11.777 2.505-17.958 2.754-4.751.257-8.123 1.205-12.437 3.188-6.086 2.564-11.605 2.99-18.125 3.062l-2.805.069c-2.462-.028-4.671-.136-7.07-.694-8.506-8.835-7.073-30.073-7.125-41.625l-.014-2.735.006-2.554.004-2.311C176 237 176 237 177 236a225.9 225.9 0 0 0 .563-8.063l.13-2.298c.107-1.88.207-3.76.307-5.639h1v19c30.007.875 59.981 1.127 90 1l-.641-1.754c-2.393-6.8-2.843-12.676-2.796-19.871l-.061-3.313c.004-6.582.613-10.692 4.498-16.062 1.613 3.226 1.12 6.747 1.098 10.29l-.005 2.48c-.005 2.618-.018 5.236-.03 7.855-.006 1.773-.01 3.547-.014 5.32-.011 4.352-.028 8.703-.049 13.055 3.828 0 6.076-.623 9.29-2.708 4.112-5.509 2.47-14.52 2.21-21.105-.04-1.76-.077-3.519-.11-5.279A724.91 724.91 0 0 0 282 196h1c.34 3.958.67 7.916 1 11.875.095 1.109.19 2.217.29 3.36.543 6.607.845 13.135.71 19.765h2l-.487-1.765c-.795-3.463-.752-6.963-.83-10.5l-.062-2.405c-.066-2.526-.125-5.053-.183-7.58l-.131-5.148c-.107-4.2-.209-8.401-.307-12.602l-2 4v-5l-1.828 1.531-2.422 1.969-2.39 1.969C274 197 274 197 270 197c1.333-4 3.496-4.838 7-7l-.496-2.074c-.568-3.3-.6-6.392-.567-9.738l.028-3.52L276 172h-7v26c-11.196.023-22.391.04-33.587.052-5.198.005-10.396.012-15.594.023-5.012.011-10.024.017-15.036.02-1.917.002-3.834.005-5.75.01-2.675.008-5.35.009-8.025.009l-2.426.01c-5.468-.01-5.468-.01-6.582-1.124l-3 4 .5-2.563c-.121-3.438-.121-3.438-2.246-4.972l-2.191-1.59c-2.782-2.21-3.914-3.366-4.922-6.813-.583-5.664-.747-9.402 2.859-14.062 1.938-1.145 1.938-1.145 4-1.813l2.063-.707C181 168 181 168 184 168l-1 11 .621-2.59.816-3.347c.4-1.654.4-1.654.81-3.34C186 167 186 167 187 166c8.36-1.49 16.996-1.164 25.457-1.168l4.428-.01c3.073-.006 6.147-.008 9.22-.007 3.932 0 7.864-.014 11.795-.031 3.04-.011 6.08-.013 9.119-.013a959.4 959.4 0 0 0 4.35-.013 843 843 0 0 1 6.072 0l3.481-.005c3.112.25 5.255.969 8.078 2.247 5.224 1.187 9.397 1 15 1l1-23h1l1 27 1-38h-3v7h-1l-1-7c-1.244 2.488-1.133 4.227-1.125 7l-.008 2.688c-.018 2.339-.018 2.339 1.133 4.312.071 2.374.084 4.75.063 7.125l-.028 3.883L283 162h-1v-12l-4-1-6-3c-3.01-.938-5.715-1.122-8.86-1.114h-2.912l-3.119.016-3.211.005c-3.383.005-6.765.018-10.148.03-2.294.006-4.589.01-6.883.014-5.622.011-11.245.028-16.867.049v1c-3.185.81-6.2 1.078-9.469 1.14l-2.48.06c-1.7.033-3.401.051-5.102.054-4.458.133-6.35.252-9.898 3.18L191 153a96.989 96.989 0 0 1-4 3c.508-4.318 1.197-8.033 3-12h3l1-4 1 2 3-6c.934 3.01 1.044 3.867 0 7 9.38.232 18.758.41 28.14.518 4.357.052 8.712.123 13.068.236 4.208.11 8.414.169 12.624.195 1.601.018 3.202.054 4.803.108 9.097.507 9.097.507 17.039-3.244 2.149-2.612 2.149-2.612 3.774-5.367C279 133 279 133 283 130h-53v-1c18.347-.749 36.635-1.151 55-1Z" fill="#2D3D48"/><path d="m261 61 4 .063c18.803.737 37.627 5.96 55 12.937l2.314.917c46.062 18.541 82.437 56.08 102.492 101.159C436.274 203.073 439.919 230.882 439 260c-.022 1.385-.043 2.77-.063 4.156-.69 19.139-5.835 38.158-12.937 55.844l-.917 2.314c-17.828 44.291-54.04 81.589-97.818 100.64C305.535 432.1 283.664 438.327 260 439l-2.883.099c-54.706 1.663-101.72-18.57-141.512-55.31C82.938 352.217 62.29 305.291 61 260l-.099-2.883c-1.64-53.922 18.03-101.406 54.466-140.668C153.79 76.864 206.731 59.318 261 61Zm-122 43-1.605 1.263C98.606 136.1 74.121 179.22 67.69 228.371c-2.84 25.024-.293 49.42 6.31 73.629h352c8.226-32.904 11.176-68.037 1-101l-1.102-3.836c-8.512-28.351-23.79-52.68-43.898-74.164l-2.64-2.84C353.088 92.554 317.185 75.75 280 69l-3.691-.684C228.59 60.98 176.897 73.9 139 104ZM77 309c2.297 7.656 4.645 14.107 8.063 21.188l1.464 3.041C94.594 349.637 105.532 363.68 118 377l2.64 2.84C140.15 400.34 166.834 416.9 194 425l1.923.588c48.344 14.554 98.576 8.23 142.919-15.102 14.594-7.9 27.248-17.993 39.158-29.486l2.727-2.535c15.312-14.628 26.605-32.399 35.71-51.402l.965-2.004c2.464-5.328 3.868-10.294 5.598-16.059H77Z" fill="#EAE4D4"/><path d="m330 85 2.1 1.023c42.739 21.052 74.159 58.454 91.212 102.602A181.198 181.198 0 0 1 425 194l.588 1.923c10.476 34.8 9.941 71.136.412 106.077H74c-13.092-52.367-7.412-102.289 20-149 3.046-4.89 6.418-9.49 10-14l1.263-1.605c29.892-37.602 72.887-63.507 120.862-69.583C261.83 63.956 297.692 69.099 330 85Zm-115-9-2.409.504C179.181 83.592 151.008 100.1 126 123l-2.324 2.105C94.554 152.81 74.17 196.75 72.91 236.821a537 537 0 0 0-.036 9.804l.012 3.517C72.99 265.832 74.003 281.01 79 296h342c7.738-25.794 8.713-54.64 3-81l-.504-2.422C413.606 165.984 384.806 125.873 345 100c-14.263-8.912-29.537-15.629-45.683-20.323-1.609-.47-3.212-.96-4.81-1.467C269.655 70.386 240.262 70.407 215 76Z" fill="#2D3D47"/><path d="M269 172h7l.184 2.668.253 3.52.247 3.48c.27 2.848.691 5.544 1.316 8.332l-1.496 1.023-1.942 1.352-1.933 1.336c-1.766 1.21-1.766 1.21-2.629 3.289 4.603-1.77 7.713-3.187 11-7l3 1 1-5h1l1 45h-2l-2-19 .316 4.383c.767 15.08.767 15.08-2.214 19.312-2.36 1.52-4.418 2.508-7.102 3.305l-3 1c-1.64-3.279-1.12-6.906-1.098-10.508l.005-2.547c.005-2.69.018-5.38.03-8.07A6319.916 6319.916 0 0 1 270 200c-2.272 4.072-3.382 7.04-3.398 11.703l-.012 3.223.035 3.324-.035 3.277.012 3.239.01 2.899c.54 4.633 1.945 8.912 3.388 13.335-47.811.195-47.811.195-66.875-.438l-3.62-.118A319.374 319.374 0 0 1 179 239c-1.94-32.506-1.94-32.506 2-44l2 2c2.739.218 5.38.311 8.122.319l2.542.03c2.781.031 5.563.048 8.344.065a5402.919 5402.919 0 0 0 20.996.187c5.174.04 10.349.091 15.523.141 10.158.097 20.315.18 30.473.258v-26Z" fill="#ECE6D6"/><path d="m212.457 164.832 4.428-.01c3.073-.006 6.147-.008 9.22-.007 3.932 0 7.864-.014 11.795-.031 3.04-.011 6.08-.013 9.119-.013a959.4 959.4 0 0 0 4.35-.013 843 843 0 0 1 6.072 0l3.481-.005c3.112.25 5.255.969 8.078 2.247 5.01 1.139 9.894 1.102 15 1 .834 5.101 1.183 10.022 1.188 15.188l.037 2.115c.01 3.735-.153 6.527-2.225 9.697v-5l-1.828 1.531-2.422 1.969-2.39 1.969C274 197 274 197 270 197c1.333-4 3.496-4.838 7-7l-.496-2.074c-.568-3.3-.6-6.392-.567-9.738l.028-3.52L276 172h-7v26c-11.196.023-22.391.04-33.587.052-5.198.005-10.396.012-15.594.023-5.012.011-10.024.017-15.036.02-1.917.002-3.834.005-5.75.01-2.675.008-5.35.009-8.025.009l-2.426.01c-5.468-.01-5.468-.01-6.582-1.124l-3 4 .5-2.563c-.121-3.438-.121-3.438-2.246-4.972l-2.191-1.59c-2.782-2.21-3.914-3.366-4.922-6.813-.583-5.664-.747-9.402 2.859-14.062 1.938-1.145 1.938-1.145 4-1.813l2.063-.707C181 168 181 168 184 168l-1 11 .621-2.59.816-3.347c.4-1.654.4-1.654.81-3.34C186 167 186 167 187 166c8.36-1.49 16.996-1.164 25.457-1.168l4.428-.01c3.073-.006 6.147-.008 9.22-.007 3.932 0 7.864-.014 11.795-.031 3.04-.011 6.08-.013 9.119-.013a959.4 959.4 0 0 0 4.35-.013 843 843 0 0 1 6.072 0l3.481-.005c3.112.25 5.255.969 8.078 2.247 5.224 1.187 9.397 1 15 1l1-23h1l1 27 1-38h-3v7h-1l-1-7c-1.244 2.488-1.133 4.227-1.125 7l-.008 2.688c-.018 2.339-.018 2.339 1.133 4.312.071 2.374.084 4.75.063 7.125l-.028 3.883L283 162h-1v-12l-4-1-6-3c-3.01-.938-5.715-1.122-8.86-1.114h-2.912l-3.119.016-3.211.005c-3.383.005-6.765.018-10.148.03-2.294.006-4.589.01-6.883.014-5.622.011-11.245.028-16.867.049v1c-3.185.81-6.2 1.078-9.469 1.14l-2.48.06c-1.7.033-3.401.051-5.102.054-4.458.133-6.35.252-9.898 3.18L191 153a96.989 96.989 0 0 1-4 3c.508-4.318 1.197-8.033 3-12h3l1-4 1 2 3-6c.934 3.01 1.044 3.867 0 7 9.38.232 18.758.41 28.14.518 4.357.052 8.712.123 13.068.236 4.208.11 8.414.169 12.624.195 1.601.018 3.202.054 4.803.108 9.097.507 9.097.507 17.039-3.244 2.149-2.612 2.149-2.612 3.774-5.367C279 133 279 133 283 130h-53v-1c18.347-.749 36.635-1.151 55-1Z" fill="#2D3D48"/><path d="M285 128v5h5c1.339 4.016 1.13 7.875 1.114 12.061v2.81c0 3.067-.009 6.135-.016 9.203l-.005 6.377c-.003 5.598-.013 11.196-.024 16.793-.01 5.711-.015 11.422-.02 17.133-.01 11.208-.028 22.415-.049 33.623l-4 1c-1.161-4.664-1.203-9.223-1.281-14l-.056-2.643A3364.29 3364.29 0 0 1 285.5 207c-.069-3.646-.14-7.292-.219-10.938l-.056-2.681c-.116-4.777-.353-9.507-.784-14.268-.609-7-.324-13.914-.003-20.925l.158-3.87c.128-3.106.263-6.212.404-9.318h1l1 27 1-38h-3v7h-1l-1-7c-1.244 2.488-1.133 4.227-1.125 7l-.008 2.688c-.018 2.339-.018 2.339 1.133 4.312.071 2.374.084 4.75.063 7.125l-.028 3.883L283 162h-1v-12l-4-1-6-3c-3.01-.938-5.715-1.122-8.86-1.114h-2.912l-3.119.016-3.211.005c-3.383.005-6.765.018-10.148.03-2.294.006-4.589.01-6.883.014-5.622.011-11.245.028-16.867.049v1c-3.185.81-6.2 1.078-9.469 1.14l-2.48.06c-1.7.033-3.401.051-5.102.054-4.458.133-6.35.252-9.898 3.18L191 153a96.989 96.989 0 0 1-4 3c.508-4.318 1.197-8.033 3-12h3l1-4 1 2 3-6Z" fill="#929794"/><path d="M178 220h1v19l7.676.148c3.545.073 7.091.15 10.637.227l2.814.06c10.958.24 21.903.575 32.85 1.147.966.05 1.932.1 2.928.15 4.656.243 9.311.502 13.965.783 8.648.487 16.666.78 25.13-1.515l-.974 2.264c-1.309 3.49-1.482 6.866-1.651 10.548l-.117 2.1A692.731 692.731 0 0 0 272 260h-1l-1-5-1 8-12 2c.477-2.438.956-4.875 1.438-7.313l.408-2.091c.582-2.939 1.206-5.75 2.154-8.596 1.454.03 1.454.03 2.938.063 2.937.293 2.937.293 4.062-1.063-3.876-1.248-7.77-1.174-11.798-1.205l-2.366-.03c-2.576-.032-5.151-.057-7.727-.081l-5.363-.063c-4.702-.056-9.404-.105-14.106-.153-4.8-.05-9.598-.106-14.398-.161-9.414-.108-18.828-.21-28.242-.307l1.468 3.307c1.43 3.447 1.992 5.947 2.22 9.63l.199 2.903L188 262l-8-1-2-5-2 1c-.029-3.312-.047-6.625-.063-9.938l-.025-2.865-.01-2.724-.016-2.524C176 237 176 237 177 236a225.9 225.9 0 0 0 .563-8.063l.13-2.298c.107-1.88.207-3.76.307-5.639Z" fill="#3D4749"/><path d="M285 186h1l1 45h-2l-2-19 .316 4.383c.767 15.08.767 15.08-2.214 19.312-2.36 1.52-4.418 2.508-7.102 3.305l-3 1c-1.64-3.279-1.12-6.906-1.098-10.508l.005-2.547c.005-2.69.018-5.38.03-8.07A6319.916 6319.916 0 0 1 270 200c-2.272 4.072-3.382 7.04-3.398 11.703l-.012 3.223.035 3.324-.035 3.277.012 3.239.01 2.899c.54 4.633 1.945 8.912 3.388 13.335-47.811.195-47.811.195-66.875-.438l-3.62-.118A319.374 319.374 0 0 1 179 239c-1.94-32.506-1.94-32.506 2-44l2 2c2.739.218 5.38.311 8.122.319l2.542.03c2.781.031 5.563.048 8.344.065a5402.919 5402.919 0 0 0 20.996.187c5.174.04 10.349.091 15.523.141 10.158.097 20.315.18 30.473.258v-26Z" fill="#ECE6D6"/><path d="m212.457 164.832 4.428-.01c3.073-.006 6.147-.008 9.22-.007 3.932 0 7.864-.014 11.795-.031 3.04-.011 6.08-.013 9.119-.013a959.4 959.4 0 0 0 4.35-.013 843 843 0 0 1 6.072 0l3.481-.005c3.112.25 5.255.969 8.078 2.247 5.01 1.139 9.894 1.102 15 1 .834 5.101 1.183 10.022 1.188 15.188l.037 2.115c.01 3.735-.153 6.527-2.225 9.697v-5l-1.828 1.531-2.422 1.969-2.39 1.969C274 197 274 197 270 197c1.333-4 3.496-4.838 7-7l-.496-2.074c-.568-3.3-.6-6.392-.567-9.738l.028-3.52L276 172h-7v26c-11.196.023-22.391.04-33.587.052-5.198.005-10.396.012-15.594.023-5.012.011-10.024.017-15.036.02-1.917.002-3.834.005-5.75.01-2.675.008-5.35.009-8.025.009l-2.426.01c-5.468-.01-5.468-.01-6.582-1.124l-3 4 .5-2.563c-.121-3.438-.121-3.438-2.246-4.972l-2.191-1.59c-2.782-2.21-3.914-3.366-4.922-6.813-.583-5.664-.747-9.402 2.859-14.062 1.938-1.145 1.938-1.145 4-1.813l2.063-.707C181 168 181 168 184 168l-1 11 .621-2.59.816-3.347.81-3.34C186 167 186 167 187 166c8.36-1.49 16.996-1.164 25.457-1.168Z" fill="#293944"/><path d="M270 199c1.613 3.226 1.12 6.747 1.098 10.29l-.005 2.48c-.005 2.618-.018 5.236-.03 7.855-.006 1.773-.01 3.547-.014 5.32-.011 4.352-.028 8.703-.049 13.055 3.106 0 4.353-.54 7-2-.125 1.875-.125 1.875-1 4-9.16 4.463-20.233 2.915-30 2v-1l22-1-3-9c-.53-4.21-.465-8.384-.438-12.625l-.06-3.313c.004-6.582.613-10.692 4.498-16.062Z" fill="#556268"/><path d="M191 247c7.865-.025 15.73-.043 23.596-.055 2.675-.004 5.35-.012 8.026-.02 3.847-.013 7.695-.018 11.542-.023l3.618-.015h3.396l2.974-.007c3.018.127 5.882.565 8.848 1.12v3l-1.933-.092c-19.804-.924-39.273-1.054-59.067.092l-1-4Z" fill="#E7E2D2"/><path d="m193 260 1.773.214c8.285.885 16.513.939 24.833.916 2.39-.005 4.778 0 7.167.007 8.129.003 16.144-.16 24.227-1.137v4c-4.916.799-9.597 1.128-14.594 1.133l-2.149.003c-1.496 0-2.992-.001-4.487-.006-2.236-.005-4.472 0-6.708.007-4.355.003-8.708-.048-13.062-.137l-2.196-.04a318.709 318.709 0 0 1-6.273-.218l-3.67-.137C195 264 195 264 193.591 261.954c-.194-.645-.39-1.29-.591-1.954Z" fill="#EAE5D5"/><path d="M172 135c1.281 1.82 1.281 1.82 2.715 4.34l1.58 2.72c1.092 1.914 2.183 3.828 3.273 5.743l1.584 2.724 1.438 2.524c1.338 2.25 1.338 2.25 4.41 2.949-.75 7.625-.75 7.625-3 11l-.602-3.027c-1.38-4.824-4.417-7.924-7.773-11.536-3.925-4.306-7.53-8.489-10.625-13.437 4.75-4 4.75-4 7-4Z" fill="#DEC041"/><path d="M242 83h17v5h-5v15h-6V88h-6v-5Z" fill="#424E48"/><path d="M246 322c7 0 7 0 10 2 .188 2.938.188 2.938 0 6v12h-4v-9h-2v9h-4v-20Z" fill="#D8D5C7"/><path d="M148 154c4.065 1.567 6.462 4.485 9.25 7.688 4.294 4.82 8.733 9.23 13.75 13.312l-1 4c-2.92-1.363-5.385-2.932-7.934-4.898l-2.216-1.704-2.287-1.773-2.276-1.75A634.367 634.367 0 0 1 144 160c1.152-2.468 2.048-4.048 4-6Z" fill="#E7C841"/><path d="M270.5 352.75c2.5.25 2.5.25 4.5 2.25.199 2.71.278 5.293.25 8l.023 2.234c-.02 5.513-.02 5.513-2.273 7.766-2.5.25-2.5.25-5 0-2.56-2.56-2.26-4.272-2.273-7.766l.023-2.234-.023-2.234c.027-7.541.027-7.541 4.773-8.016Z" fill="#D1CEC2"/><path d="M270 323h8c2.043 2.043 1.185 6.137 1.188 8.938l.037 2.248c.005 1.94-.103 3.878-.225 5.814l-2 2h-7v-19Z" fill="#D6D3C6"/><path d="M290 323h8c2.043 2.043 1.185 6.137 1.188 8.938l.037 2.248c.005 1.94-.103 3.878-.225 5.814l-2 2h-7v-19Z" fill="#DBD7C9"/><path d="M328 135c3.653 1.25 4.78 1.671 7 5l-1.652 1.766c-5.93 6.446-11.205 13.157-16.348 20.234l-6-5 1.814-.239c2.92-1.017 3.568-2.328 5.166-4.945l1.588-2.56 1.62-2.694 1.654-2.681c2.71-4.367 2.71-4.367 5.158-8.881Z" fill="#E1C442"/><path d="M279 354h8c1 1 1 1 1.114 2.766l-.016 2.27-.01 2.45-.026 2.577-.013 2.587c-.012 2.117-.03 4.233-.049 6.35h-9v-19Z" fill="#E4DFD0"/><path d="M184 168v3l-5 2c-.895 5.258-1.64 10.672-1 16l2 2c-.375 2.125-.375 2.125-1 4-4.152-2.686-7.442-5.077-8.86-9.96-.586-5.656-.74-9.388 2.86-14.04 1.938-1.145 1.938-1.145 4-1.813l2.063-.707C181 168 181 168 184 168Z" fill="#2A373D"/><path d="M296.563 353.188C299 354 299 354 301 356v4h-4v-3h-2v12h2l-1-7h5v11l-3.875.188-2.18.105L293 373c-2.445-3.668-2.299-5.634-2.313-10l-.05-3.75c.363-3.25.363-3.25 1.722-5.2C294 353 294 353 296.563 353.188Z" fill="#E3DECF"/><path d="m394 165 1 5-10 6c.798 3.192 1.742 5.982 3 9l-5 2a793.462 793.462 0 0 1-3-5.313l-1.688-2.988C377 176 377 176 377 173c2.456-1.338 4.914-2.67 7.375-4l2.117-1.156C391.773 165 391.773 165 394 165Z" fill="#324246"/><path d="M136 128c3 0 3 0 4.824 1.75l1.863 2.25 1.887 2.25L146 136c3.26-.694 4.79-1.459 7-4l4 2c-1.448 3.444-3.277 5.361-6.125 7.75l-2.195 1.86L147 145a85.132 85.132 0 0 1-13-13l2-4Z" fill="#314146"/><path d="M261 247c2-.043 4-.04 6 0 1 1 1 1 1.098 4.379-.007 1.394-.019 2.789-.036 4.184l-.013 2.154c-.012 1.76-.03 3.522-.049 5.283l-11 2c.477-2.438.956-4.875 1.438-7.313l.408-2.091c.582-2.939 1.206-5.75 2.154-8.596Z" fill="#EBE5D4"/><path d="M303 121c2.02.602 4.021 1.273 6 2l1 2c-.697 1.724-.697 1.724-1.836 3.773l-1.226 2.25-1.313 2.352a977.14 977.14 0 0 0-2.523 4.586l-1.146 2.056c-1.165 2.246-1.165 2.246-1.956 5.983l-7-7 2-1 2 1 .375-2.11c.678-3.135 1.606-6.099 2.625-9.14l1.063-3.203C302 122 302 122 303 121Z" fill="#DEC143"/><path d="M198 136c.934 3.01 1.044 3.867 0 7h21l1 3c-3.185.81-6.2 1.078-9.469 1.14l-2.48.06c-1.7.033-3.401.051-5.102.054-4.458.133-6.35.252-9.898 3.18L191 153a96.989 96.989 0 0 1-4 3c.508-4.318 1.197-8.033 3-12h3l1-4 1 2 3-6Z" fill="#565B56"/><path d="M200 393c4.59 1.148 5.337 2.29 8 6l1-6h4v14c-4.192-1.048-5.216-1.918-8-5l-1 5h-4v-14Z" fill="#EDD057"/><path d="M190 353h4l1 6 1-5h4c-.142 2.23-.289 4.459-.438 6.688-.08 1.24-.162 2.482-.246 3.761-.26 2.933-.664 5.685-1.316 8.551h-6c-.337-2.395-.67-4.791-1-7.188-.095-.673-.19-1.347-.29-2.04-.493-3.619-.823-7.12-.71-10.772Z" fill="#DEDACC"/><path d="M214.438 352.813C217 353 217 353 219 355v4h-3v-2h-2l2.5 3c2.997 4.149 3.02 6.98 2.5 12-1 1-1 1-3.938 1.188C212 373 212 373 210 371c-.125-2.625-.125-2.625 0-5l4-1-2.063-1.563C210 361 210 361 210.188 357.313c1.044-4.253 1.044-4.253 4.25-4.5Z" fill="#E0DCCD"/><path d="M309 231c.136 2.71.234 5.413.313 8.125l.126 2.305c.09 4.13-.168 6.808-2.752 10.132-2.687 2.438-2.687 2.438-6 2.313L298 253l2-2c1.893-5.233 2.292-10.093 2.46-15.645.54-2.355.54-2.355 2.454-3.68C307 231 307 231 309 231Z" fill="#EAE4D5"/><path d="M285.5 392.563c2.5.437 2.5.437 4.313 1.437 1.858 3.13 1.738 6.448 1.187 10l-2 3c-3.1.396-5.122.498-7.875-1.063-1.773-3.053-1.488-5.484-1.125-8.937 1.487-3.052 2.135-3.849 5.5-4.438Z" fill="#F0D257"/><path d="M183 200h1l1 13c9.568 3.586 19.03 3.767 29.125 4.188 1.737.081 3.474.164 5.21.248 4.222.2 8.443.387 12.665.564v1c-4.907.05-9.814.086-14.722.11-1.664.01-3.328.023-4.992.04-24.681.253-24.681.253-31.286-4.15-.363-2.715-.363-2.715-.313-5.938l.012-3.214C181 203 181 203 183 200Z" fill="#404F58"/><path d="M192 323h8c1 1 1 1 1.098 3.066l-.036 2.497-.027 2.503L201 333l-5 1v8h-4v-19Z" fill="#DFDBCD"/><path d="M304 353h8v4h-4v4h4v4h-4v4h4v4h-8v-20Z" fill="#DDD9CB"/><path d="M259 322h8v4h-4v4h4v4h-4v4h4v4h-8v-20Z" fill="#E2DDCE"/><path d="M235 322h8v4h-4v4h4v4h-4v4h4v4h-8v-20Z" fill="#DDD9CB"/><path d="M246 110h7v19h-6l-1-19Z" fill="#E8C842"/><path d="M199 200c6.846-.051 13.692-.086 20.538-.11 2.323-.01 4.646-.023 6.968-.04 12.655-.094 25.01-.132 37.494 2.15v7l-1.313-1.938c-1.6-2.33-1.6-2.33-4.687-3.062-2.28-.21-4.565-.368-6.852-.5l-2.071-.122c-2.234-.13-4.468-.255-6.702-.378l-4.603-.263c-12.918-.73-25.84-1.295-38.772-1.737v-1Z" fill="#808787"/><path d="m180 244 5 1c.507 1.894 1.006 3.79 1.5 5.688l.844 3.199c.595 2.824.784 5.241.656 8.113l-8-1v-17Z" fill="#EAE4D3"/><path d="m302 322 2.25.563c2.978.658 2.978.658 6.75-.563l-2 20h-4c-1.281-6.656-2.336-13.254-3-20Z" fill="#D9D5C8"/><path d="M255 353h8v4h-4v3h4v4h-4v9h-4v-20Z" fill="#DBD8CA"/><path d="m197 121 3 9h27v1l-2.4.012c-3.596.033-7.191.104-10.787.175-1.87.01-1.87.01-3.776.018-7.332-.132-7.332-.132-13.4 3.346L195 137c-.65-1.582-1.294-3.166-1.938-4.75l-1.09-2.672A47.331 47.331 0 0 1 190 123c4.75-2 4.75-2 7-2Z" fill="#C1AE4C"/><path d="M272 172h4l.184 2.668.253 3.52.247 3.48c.27 2.848.691 5.544 1.316 8.332-4.75 4-4.75 4-7 4-.027-2.917-.047-5.833-.063-8.75l-.025-2.5-.01-2.422-.016-2.222c.116-2.152.523-4.037 1.114-6.106Z" fill="#C3BEB0"/><path d="m283 133 3 1-1 39c-3.373-4.497-3.373-4.497-3.258-8.914l.043-2.805.09-2.906c.043-1.909.083-3.818.117-5.727l.074-2.557c.078-2.152.078-2.152-1.066-4.091a74.581 74.581 0 0 1-.188-4.938l-.042-2.652C281 136 281 136 283 133Z" fill="#CECABD"/><path d="M324 393c.195 1.958.38 3.916.563 5.875l.316 3.305C325 405 325 405 324 407h-4v-2h-7c.15-4.98 2.881-7.322 6.21-10.645C321 393 321 393 324 393Z" fill="#F7D758"/><path d="M285 128v5h5l1 3-1 1a69.603 69.603 0 0 0-.563 4.063L289 145h-1v-11h-3v7h-1l-1-11h-53v-1c18.347-.749 36.635-1.151 55-1Z" fill="#88886C"/><path d="m229 393 2 1v3l-8 1 1 5h7l-1 4c-7.342.361-7.342.361-9.938-1.063-1.663-3.033-2.002-5.493-2.062-8.937 2.83-4.598 5.904-4.472 11-4Z" fill="#E6CB56"/><path d="M275 113c2-.043 4-.04 6 0l1 1c-.487 4.874-1.573 9.34-3 14h-6c.142-1.75.289-3.5.438-5.25.08-.975.162-1.95.246-2.953.267-2.362.67-4.516 1.316-6.797Z" fill="#E8C842"/><path d="M175 101c3 1 3 1 4.824 4.09.632 1.277 1.252 2.56 1.863 3.847l.971 1.96C185 115.704 185 115.704 185 118l-5 1-8-16 3-2Z" fill="#314046"/><path d="M305 393c1.938 1.25 1.938 1.25 3 3-.166 2.657-.79 3.764-2.563 5.75L304 403l4 1v3h-12c2.024-4.048 3.564-5.288 7-8v-2h-6v-3c2.799-1.4 4.905-1.253 8-1ZM272 393c1.938 1.25 1.938 1.25 3 3-.166 2.657-.79 3.764-2.563 5.75L271 403l4 1v3h-12c2.024-4.048 3.564-5.288 7-8v-2h-6v-3c2.799-1.4 4.905-1.253 8-1Z" fill="#EFD257"/><path d="M181.125 392.875 184 393l1 4h-5l1.875.875C184 399 184 399 186 401c-.556 4.556-.556 4.556-2 6-2.67.141-5.324.042-8 0l-1-4 7 1v-2l-2.438-.438C177 401 177 401 176 400c-.188-2.438-.188-2.438 0-5 2-2 2-2 5.125-2.125Z" fill="#EFD157"/><path d="M236 394h10v2h-7v3h6v3h-5v2h7v3h-11v-13Z" fill="#F2D457"/><path d="M285 186h1l1 45h-2c-.478-5.374-.941-10.75-1.392-16.125-.155-1.83-.314-3.66-.477-5.489-.234-2.625-.453-5.251-.67-7.878l-.23-2.488c-.159-2.002-.205-4.012-.231-6.02l2-2c.648-2.57.648-2.57 1-5Z" fill="#E6E0D0"/><path d="M222 353h4v20h-4v-20ZM203 353h4v20h-4v-20Z" fill="#E2DDCF"/><path d="M251 260v4l-14 1v-2h-25v-1l2.443-.076c3.686-.117 7.372-.239 11.057-.361l3.844-.12C236.554 261.2 243.827 260 251 260Z" fill="#BEBEB4"/><path d="m226 89 1 2h-2v2l-4 1-1 4h3v3c-4.45.36-4.45.36-6.813-1.188-1.628-2.484-1.697-3.9-1.187-6.812 3.059-3.426 6.59-3.576 11-4Z" fill="#E8CD57"/><path d="M135 247c9.367-.182 18.659.387 28 1v1c-3.535.788-6.902 1.175-10.52 1.316l-3.095.127-3.197.12-3.256.13c-2.644.106-5.288.208-7.932.307v-4Z" fill="#EBCC45"/><path d="M362 223v4c-3.728.674-7.458 1.338-11.188 2l-3.197.578-3.095.547-2.841.508c-2.599.356-5.06.433-7.679.367 2.9-1.55 5.72-2.602 8.879-3.508l2.79-.8 2.894-.817 2.904-.84 2.787-.793 2.541-.723C359 223 359 223 362 223Z" fill="#EACB44"/><path d="m219 143 1 3c-9.28 2.475-19.588.76-29 0v-1c9.387-1.334 18.491-2.324 28-2Z" fill="#8D8E88"/><path d="m295 273 1 2c1.99.695 3.993 1.356 6 2a212.116 212.116 0 0 1 6.375 3.125l3.21 1.633L314 283l-1 4c-4.556-1.585-8.315-3.99-12.313-6.625l-1.955-1.273c-1.58-1.03-3.156-2.066-4.732-3.102l1-3Z" fill="#E6C843"/><path d="M336 267c8.693.794 17.343 1.894 26 3v4c-6.064-.605-11.655-1.863-17.5-3.563l-2.492-.708c-2.004-.571-4.006-1.15-6.008-1.729v-1Z" fill="#EACB44"/><path d="M289 280c6.124 4.516 12.08 9.22 18 14l-1 2c-4.425-.449-7.052-3.46-10.125-6.375l-1.629-1.5c-2.427-2.263-4.398-4.352-6.246-7.125l1-1Z" fill="#E6C742"/><path d="M164 267c-2.772 1.48-5.405 2.49-8.441 3.29l-2.518.663-2.603.672-2.616.695C141.388 274 141.388 274 138 274v-4a2609.8 2609.8 0 0 1 9.625-1.5l2.738-.434c4.591-.703 8.975-1.252 13.637-1.066ZM138 223c7.884 1.353 15.394 3.544 23 6v1c-7.819-.466-15.364-1.225-23-3v-4Z" fill="#EACA44"/><path d="M234 201c4.25-.029 8.5-.047 12.75-.063l3.656-.025 3.516-.01 3.237-.016c2.465.099 4.493.398 6.841 1.114v7l-1.313-1.938c-2.173-2.656-3.884-2.968-7.23-3.36l-3-.237-3.252-.264-3.393-.263-3.427-.276c-2.795-.224-5.59-.445-8.385-.662v-1Z" fill="#394953"/><path d="M145 201c3.656.595 6.568 1.606 9.863 3.285l2.686 1.358 2.763 1.42 2.823 1.431c2.291 1.163 4.58 2.332 6.865 3.506-3.703 1.234-4.582.616-8.105-.871l-2.979-1.24-3.103-1.327-3.14-1.314c-2.56-1.074-5.118-2.157-7.673-3.248v-3Z" fill="#E9CA44"/><path d="M179 172h3l-2 19-3-2c-.328-1.918-.328-1.918-.25-4.188l.082-2.417c.62-8.848.62-8.848 2.168-10.395Z" fill="#F7D754"/><path d="M169 286c-3.243 1.68-6.496 3.341-9.75 5l-2.79 1.445-2.694 1.368-2.476 1.269C149 296 149 296 145 296v-3c3.432-1.37 6.871-2.718 10.313-4.063l2.958-1.181 2.842-1.104 2.619-1.031C166 285 166 285 169 286ZM355 202v2a1682.538 1682.538 0 0 1-10.813 4.563l-3.103 1.326-2.979 1.24-2.745 1.158C333 213 333 213 330 212c3.596-1.87 7.203-3.718 10.813-5.563l3.103-1.615 2.979-1.513 2.745-1.413C352 201 352 201 355 202ZM331 285c3.36.605 6.449 1.433 9.645 2.629l2.548.947 2.62.986 2.677.999c2.171.81 4.341 1.623 6.51 2.439v3c-5.816-.518-10.285-2.912-15.375-5.563l-2.52-1.287A978.675 978.675 0 0 1 331 286v-1ZM341 180l3 3-18 12-2-1c2.455-2.15 4.915-4.294 7.375-6.438l2.117-1.853 2.031-1.768 1.873-1.634C339 181 339 181 341 180Z" fill="#E9CA43"/><path d="M158 180c4.39 2.82 8.4 5.874 12.375 9.25l1.652 1.39c1.327 1.118 2.65 2.238 3.973 3.36-3.395 0-4.248-.577-7.012-2.406l-2.295-1.504-2.38-1.59-2.417-1.59c-1.97-1.297-3.934-2.6-5.896-3.91l2-3Z" fill="#E9C943"/><path d="m301 265 1 2c2.637.844 2.637.844 5.75 1.5 3.925.89 7.55 1.91 11.25 3.5v3c-4.786-.575-8.538-1.982-12.875-4.063l-3.492-1.66L300 268l1-3Z" fill="#E6C743"/><path d="M206 288a390.604 390.604 0 0 1-4.25 4l-2.39 2.25C197 296 197 296 193 296c1.37-3.161 1.99-3.993 5-6l-12-1v-1a2125.9 2125.9 0 0 1 8.875-.563l2.55-.17 2.442-.146 2.254-.143C204 287 204 287 206 288Z" fill="#CAB346"/><path d="M269 172h3c-.11 3.792-.24 7.584-.375 11.375-.03 1.08-.062 2.16-.094 3.273l-.117 3.125-.095 2.889C271 195 271 195 269 197v-25Z" fill="#DED8C9"/><path d="M364 247v3c-2.875.027-5.75.047-8.625.063l-2.45.025c-4.428.018-8.564-.192-12.925-1.088v-1c2.5-.17 5-.336 7.5-.5l2.11-.145c4.807-.311 9.572-.398 14.39-.355Z" fill="#E8C942"/><path d="M239 247c4.833-.083 9.237.047 14 1v3l-24-1v-1l10-1v-1Z" fill="#D2D0C3"/><path d="m282 233 2 1v3l-1.93.766c-2.515 1.183-2.515 1.183-3.195 4.984-1.17 6.38-2.016 12.822-2.875 19.25h-1c-.333-6.103.28-11.861 1.25-17.875l.331-2.271c.586-3.4.988-5.443 3.528-7.862L282 233Z" fill="#1B2831"/><path d="m311 256 2 1-1 1 10 1v4a761.913 761.913 0 0 1-6.375-.875l-3.586-.492C309 261 309 261 307 259l4-3Z" fill="#E6C744"/><path d="m277 236 1 3c-10.088 5.044-20 4.03-31 3v-1l1.988-.06c2.963-.095 5.925-.205 8.887-.315l3.129-.094 2.988-.117 2.761-.095C269.2 240.2 269.2 240.2 271 238h3l3-2Z" fill="#606463"/><path d="M283 133h1v18c-2.505-3.757-3.155-5.485-3.188-9.938l-.042-2.652C281 136 281 136 283 133Z" fill="#EBE6D6"/><path d="M324 393v9h-1l-1-7c-2.37 2.954-2.37 2.954-2 7l-2.375-.063c-2.606-.124-2.606-.124-4.625 1.063 1.84-4.786 5.67-10 11-10Z" fill="#BAA953"/><path d="M191 394h3v13h-3v-13Z" fill="#FEDE59"/><path d="M269 169h13l-4 2c-.705 2.879-.705 2.879-.75 6.125l-.172 3.32L277 183h-1v-11l-7-1v-2Z" fill="#08090A"/><path d="M217 282h5c-1.564 3.522-3.695 6.271-6.125 9.25l-2.195 2.703L212 296l-3-1 10-11-2-2Z" fill="#E2C444"/><path d="m212 225 11 1v2l8 2c-3.575.894-5.25 1.026-8.75.563l-2.422-.31L218 230v-3l-6-1v-1Z" fill="#BCBDB3"/><path d="m278 188 3 1c-1.493 3.8-3.624 5.75-7 8h-4c1.335-4.006 3.528-4.757 7-7l1-2Z" fill="#111110"/><path d="M285 283v3c1.272 4.027 3.264 6.808 6 10-1.688-.125-1.688-.125-4-1a381.113 381.113 0 0 1-5-6c-2.15-1.373-2.15-1.373-4-2l2.938-1.438c2.867-1.264 2.867-1.264 4.062-2.562Z" fill="#E0C346"/><path d="m325 162 3 3-2.875 2.75c-2.27 2.26-3.958 4.216-5.125 7.25-.603-6.025-.603-6.025 1.113-8.8 1.233-1.456 2.555-2.835 3.887-4.2Z" fill="#E6C843"/><path d="M184 168v3l-5 2-1 7h-1v-8l-3-1c6.625-3 6.625-3 10-3Z" fill="#1E1C0F"/><path d="m174 162 7 6-4 2-5-6 2-2Z" fill="#E4C541"/><path d="M302 244h1l2 9c-2.375.625-2.375.625-5 1l-2-2 2-1c.73-2.314 1.401-4.648 2-7Z" fill="#9FA29D"/><path d="M176 180h1l.148 1.898.227 2.477c.07.812.14 1.624.21 2.46.244 2.368.244 2.368 2.415 4.165-.375 2.125-.375 2.125-1 4l-5-6h2v-9Z" fill="#1B1B10"/><path d="M191 146h14v1l-1.758.078c-5.613.408-8.83 1.416-13.242 4.922l1-6Z" fill="#31424D"/><path d="m284 397 4 1v5l-4 1v-7Z" fill="#3F4B48"/><path d="m207 144 1 3-17-1v-1c5.349-.592 10.609-1.142 16-1Z" fill="#7C817F"/><path d="M251 400h8v3h-8v-3Z" fill="#E4C956"/><path d="m282 233 2 1v3l-1.938.875c-2.214.953-2.214.953-3.062 3.125h-2c1.625-5.75 1.625-5.75 5-8Z" fill="#212E36"/><path d="M183 200h1v11l-3-2c-.431-4.054-.3-5.55 2-9Z" fill="#5A666B"/><path d="M198 133h2v3h-2l-.875 2.938C196 142 196 142 194 143c.473-4.167 1.047-6.929 4-10Z" fill="#D9D5C8"/><path d="m275 241-3 4a108.817 108.817 0 0 1-7-1l-1-2c1.456-.363 2.915-.715 4.375-1.063l2.46-.597C273 240 273 240 275 241Z" fill="#AAACA6"/><path d="M269 147c5 0 5 0 6.813 1.5L277 150h-6l-1 7h-1v-10Z" fill="#3B4B55"/><path d="M280 258h1l.375 3.438L282 265l2 1-1 3-3-1c-1.125-7.75-1.125-7.75 0-10Z" fill="#A1A49F"/><path d="M189 146h2c.25 3.313.25 3.313 0 7-2 1.938-2 1.938-4 3 .458-3.47.891-6.674 2-10Z" fill="#827E63"/><path d="M266 290h3l2 6-4-1-1-5Z" fill="#FDDD57"/><path d="M177 180h1c1.423 3.823 2.24 6.913 2 11l-3-2c-.293-2.164-.293-2.164-.188-4.625l.083-2.477L177 180Z" fill="#DDC049"/><path d="m277 236 1 3c-4.43 2.092-4.43 2.092-7.313 1.625L269 240l2-2h3l3-2Z" fill="#848682"/>
      </g>
    </svg>
  ),
}
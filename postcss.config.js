
import autoprefixer from 'autoprefixer';
import tailwind from 'tailwindcss';
import cssnano from 'cssnano'

const isDev = process.env.NODE_ENV === 'development';

export default {
  plugins: [
    tailwind,
    !isDev ? autoprefixer : {},
    !isDev
      ? cssnano({
          preset: 'default',
        })
      : {},
  ],
};

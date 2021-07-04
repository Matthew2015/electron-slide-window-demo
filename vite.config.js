/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Matthew
 * @Date: 2021-07-02 23:09:20
 * @LastEditTime: 2021-07-02 23:37:49
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  // base: path.resolve(__dirname, './dist'),
  plugins: [vue()]
})

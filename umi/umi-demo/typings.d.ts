declare module '*.css';
declare module '*.less';
declare module '*.png';
declare const CurrentEnvironment: 'dev' | 'test' | 'prd';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}

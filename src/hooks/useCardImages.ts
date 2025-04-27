export interface CardImages {
  name: string;
  src: string;
}

export function useCardImages(): CardImages[] {
  const modules = import.meta.glob<{ default: string }>(
    "../assets/card-images/*.jpg",
    {
      eager: true,
    }
  );

  return Object.entries(modules).map(([filePath, { default: src }]) => {
    const name = filePath
      .split("/")
      .pop()!
      .replace(/\.(png|jpg)$/, "");
    return { name, src };
  });
}

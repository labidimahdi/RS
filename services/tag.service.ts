"use server";

export async function fetchTags() {
  const url = `${process.env.NEXT_PUBLIC_DIGITAL_BACKEND}/tags/get-data`;
  try {
    const response = await fetch(url, {
      method: "GET",
    });

    if (!response.ok)
      throw new Error(
        "Une erreur s'est produite lors de la récupération des tags",
      );

    return response.json();
  } catch (err: any) {
    return { error: err.message };
  }
}

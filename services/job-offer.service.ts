"use server";

import { filterInterface } from "shared/interfaces/dropdowns.interface";

export async function fetchJobOffers(
  page: number,
  pageSize: number,
  filter: filterInterface,
) {
  const url = `${process.env.NEXT_PUBLIC_DIGITAL_BACKEND}/job-offers/active?page=${page}&pageSize=${pageSize}`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        ...filter,
      }),
    });

    if (!response.ok)
      throw new Error(
        "Une erreur s'est produite lors de la récupération de la data générale du formulaire",
      );

    return response.json();
  } catch (err: any) {
    return { error: err.message };
  }
}

export async function fetchFilters() {
  const url = `${process.env.NEXT_PUBLIC_DIGITAL_BACKEND}/job-offers/get-data`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!response.ok)
      throw new Error(
        "Une erreur s'est produite lors de la récupération des filters",
      );

    return response.json();
  } catch (err: any) {
    return { error: err.message };
  }
}

export async function fetchJobOfferById(
  id: string,
) {
  const url = `${process.env.NEXT_PUBLIC_DIGITAL_BACKEND}/job-offers/${id}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!response.ok)
      throw new Error(
        "Une erreur s'est produite lors de la récupération de la data générale du formulaire",
      );

    return response.json();
  } catch (err: any) {
    return { error: err.message };
  }
}

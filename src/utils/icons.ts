import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faQuestion } from "@fortawesome/free-solid-svg-icons";
import {
  faAmazon,
  faMicrosoft,
  faApple,
  faGoogle,
  faSpotify,
  faPaypal,
  faStripe,
} from "@fortawesome/free-brands-svg-icons";

const iconMap: Record<string, IconDefinition> = {
  faCheck,
  faAmazon,
  faMicrosoft,
  faApple,
  faGoogle,
  faSpotify,
  faPaypal,
  faStripe,
};

export function resolveIcon(name: string): IconDefinition {
  return iconMap[name] ?? faQuestion;
}

import { PageWrapper } from "@/components/PageWrapper";
import { LandingContent } from "@/components/LandingContent";

export default function DarkSidePage() {
  return (
    <PageWrapper theme="dark">
      <LandingContent heroVariant="side" />
    </PageWrapper>
  );
}

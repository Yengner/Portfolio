"use client";

import { Button, Group, Modal, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Section } from "../utils";
import { glassCardStyle } from "./styles";
import USFParticles from "../ParticlesComponent";

const universityInfo = {
    name: "University of South Florida",
    subtitle: "B.C.S. Computer Science · Class of 2026 · GPA 3.6/4.0",
};

// Incase i want to add more columns later
const academicColumns = [
    {
        items: [
            { label: "Focus", value: "Backend • Data/ML • Cloud" },
            { label: "Leadership", value: "SHPE External Director" },
        ],
    },
];

const currentCourses = [
    { code: "COP 4600", title: "Operating Systems" },
    { code: "CEN 4020", title: "Software Engineering" },
    { code: "COT 4210", title: "Discrete Structures & Algorithms" },
    { code: "MAD 4504", title: "Theory of Computation" },
];

export default function EducationPage() {
    const [modalOpened, { open: openModal, close: closeModal }] = useDisclosure(false);

    return (
        <>
            <Section
                id="education"
                title="Education"
            // description="Interactive front-end developer blending design and code."
            >
                <Modal
                    opened={modalOpened}
                    onClose={closeModal}
                    // lockScroll={false}
                    title="Current coursework"
                    size="xl"
                    centered
                    overlayProps={{
                        blur: 4,
                        opacity: 0.45,
                        color: "#0b1324",
                    }}
                    styles={{
                        header: { borderBottom: "1px solid rgba(148, 197, 255, 0.22)", paddingBottom: "0.75rem" },
                        body: { background: "linear-gradient(160deg, rgba(12,22,40,0.65) 0%, rgba(10,26,46,0.45) 100%)" },
                        title: { color: "#e3efff", fontWeight: 600, letterSpacing: "0.04em" },
                        content: {
                            background: "rgba(13, 24, 46, 0.82)",
                            border: "1px solid rgba(120, 198, 255, 0.24)",
                            boxShadow: "0 28px 60px rgba(10, 18, 42, 0.42)",
                        },
                    }}
                >
                    <Stack gap="md">
                        {currentCourses.map((course) => (
                            <Group
                                key={course.code}
                                justify="space-between"
                                style={{
                                    padding: "0.75rem 1rem",
                                    borderRadius: 14,
                                    border: "1px solid rgba(120, 198, 255, 0.24)",
                                    background: "rgba(9, 18, 36, 0.55)",
                                }}
                            >
                                <Text style={{ color: "rgba(227, 239, 255, 0.9)", fontWeight: 600 }}>{course.code}</Text>
                                <Text style={{ color: "rgba(204, 224, 255, 0.78)", fontSize: "0.95rem" }}>{course.title}</Text>
                            </Group>
                        ))}
                    </Stack>
                </Modal>

                <div style={{ position: "relative" }}>
                    <div
                        style={{
                            ...glassCardStyle,
                            // background: "transparent",
                            // background: "rgba(186, 186, 186, 0.55)",
                            position: "relative",
                            zIndex: 1,
                            display: "grid",
                            gap: "1.8rem",
                            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                            alignItems: "center",
                        }}
                    >
                        <div
                            style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "0.5rem",
                                minHeight: 200,
                            }}
                        >
                            <USFParticles
                                svg="/words/USF.svg"
                                scale={0.7}
                                width={540}
                                height={200}
                                style={{
                                    pointerEvents: "none",
                                    zIndex: 0,
                                    width: "100%",
                                    maxWidth: 520,
                                }}
                                color="#006747"
                            />
                        </div>

                        <Stack gap="lg">
                            <Stack gap="xs">
                                <Text style={{ color: "rgba(220, 234, 254, 0.92)", fontSize: "1.1rem", fontWeight: 600 }}>
                                    {universityInfo.name}
                                </Text>
                                <Text style={{ color: "rgba(204, 226, 255, 0.7)", letterSpacing: "0.06em", fontSize: "0.85rem" }}>
                                    {universityInfo.subtitle}
                                </Text>
                            </Stack>

                            <div
                                style={{
                                    display: "grid",
                                    gap: "1rem",
                                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                                }}
                            >
                                {academicColumns.map((column) => (
                                    <div
                                        key={column.items[0].label}
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "0.6rem",
                                            background: "rgba(11, 24, 48, 0.45)",
                                            border: "1px solid rgba(120, 198, 255, 0.25)",
                                            borderRadius: 14,
                                            padding: "1rem 1.1rem",
                                        }}
                                    >
                                        <div style={{ display: "grid", gap: "0.5rem" }}>
                                            {column.items.map((item) => (
                                                <div key={item.label} style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                                                    <Text style={{ color: "rgba(197, 218, 255, 0.65)", fontSize: "0.72rem", letterSpacing: "0.08em" }}>
                                                        {item.label}
                                                    </Text>
                                                    <Text style={{ color: "rgba(227, 239, 255, 0.92)", fontWeight: 600 }}>
                                                        {item.value}
                                                    </Text>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Button
                                onClick={openModal}
                                variant="gradient"
                                gradient={{ from: "#60a5fa", to: "#22d3ee", deg: 130 }}
                                size="sm"
                                radius="xl"
                                style={{ alignSelf: "flex-start" }}
                            >
                                View current classes
                            </Button>
                        </Stack>
                    </div>
                </div>
            </Section>
        </>
    );
}
